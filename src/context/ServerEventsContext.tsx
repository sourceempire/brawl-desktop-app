/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useCallback, useEffect, useRef, useState } from 'react';
import { Fetcher } from 'api';
import * as authRequests from 'api/requests/AuthRequests';
import SockJs from 'sockjs-client';
import { v4 as uuid } from 'uuid';

const CONNECTION_RETRIES_LIMIT = 5;

if (process.env.REACT_APP_SERVER_URL === undefined) {
  throw 'REACT_APP_SERVER_URL environment variable not set';
}

const url = `${process.env.REACT_APP_SERVER_URL}/api/events`;

export type Listener<T> = (message: T) => void;
type Listeners = { [key: string]: { [key: string]: Listener<any> } };

type State = { [key: string]: unknown };
type FeedListener = (state: State) => void;
type FeedListeners = { [feedType: string]: { [listenerId: string]: FeedListener } };

type Context = {
  addServerEventListener: <T>(event: string, listener: Listener<T>) => string;
  removeServerEventListener: (event: string, listenerId: string) => void;
  subscribeToFeed: (feed: string, listener: (state: State) => void) => string;
  unsubscribeFromFeed: (feed: string, feedListenerId: string) => void;
};

export const ServerEventsContext = createContext<Context>({
  addServerEventListener: () => '',
  removeServerEventListener: () => undefined,
  subscribeToFeed: () => '',
  unsubscribeFromFeed: () => undefined
});

type Props = {
  children: React.ReactNode;
};

export const ServerEventsProvider = ({ children }: Props) => {
  const initialLoad = useRef<boolean>(true);
  const [error, setError] = useState<Error>();
  const socket = useRef<WebSocket>();
  const listeners = useRef<Listeners>({});
  const feedListeners = useRef<FeedListeners>({});
  const [connectingSocket, setConnectingSocket] = useState(true);
  const [connectionRetries, setConnectionRetries] = useState(0);
  const feedCachedStates = useRef<{ [feedType: string]: State }>({});

  const dispatchEvent = (event: string, message: Event) => {
    if (listeners.current[event] !== undefined) {
      Object.values(listeners.current[event]).forEach((event) => event(message));
    } else {
      console.debug('Push event was recieved but not caught', { event, message });
    }
  };

  const dispatchFeed = (feed: string, state: { [key: string]: unknown }) => {
    if (feedListeners.current[feed] !== undefined) {
      feedCachedStates.current[feed] = state;
      Object.values(feedListeners.current[feed]).forEach((listener) => listener(state));
    } else {
      console.warn('Feed update was recieved but no feed listener was set up', { feed, state });
    }
  };

  const handleOpen = (token: string) => {
    socket.current?.send(token);
    setConnectingSocket(false);
  };

  const handleClose = useCallback(() => {
    if (connectionRetries < CONNECTION_RETRIES_LIMIT) {
      setTimeout(async () => {
        await authRequests.loginValidate();
        setConnectionRetries(connectionRetries + 1);
      }, 500);
    } else {
      setConnectionRetries(0);
    }
  }, [connectionRetries]);

  const handleMessage = useCallback((event: MessageEvent<any>) => {
    const data = JSON.parse(event.data);
    if (data.feed) {
      dispatchFeed(data.feed, data.state);
    } else {
      if (data.message.error) {
        console.error(data.event, data.message);
      }
      dispatchEvent(data.event, data.message);
    }
  }, []);

  const handleError = (message: Event) => {
    if (message.eventPhase === EventSource.CLOSED) {
      socket.current?.close();
    } else {
      setError(Error('Oops, Something went wrong with the co'));
    }
  };

  const setupSocketConnection = useCallback(async () => {
    const result = await Fetcher.get<{ token: string }>(url + '/request', {});

    const sockjs = new SockJs(url);

    socket.current = sockjs;
    socket.current.onopen = () => handleOpen(result.token);
    socket.current.onclose = handleClose;
    socket.current.onmessage = handleMessage;
    socket.current.onerror = handleError;

    return sockjs;
  }, [handleClose, handleMessage]);

  useEffect(() => {
    if (!initialLoad.current && connectionRetries === 0) return;
    initialLoad.current = false;

    let sockjs: WebSocket;

    const getSocket = async () => {
      sockjs = await setupSocketConnection();
    };

    getSocket();

    return () => {
      sockjs.close();
      listeners.current = {};
    };
  }, [setupSocketConnection, connectionRetries]);

  const addServerEventListener = useCallback(function <T>(event: string, listener: Listener<T>) {
    const listenerId = uuid();
    listeners.current[event] = { ...listeners.current[event], [listenerId]: listener };
    return listenerId;
  }, []);

  const removeServerEventListener = useCallback((event: string, listenerId: string) => {
    delete listeners.current[event][listenerId];
  }, []);

  const { current: subscribeToFeed } = useRef((feed: string, listener: FeedListener) => {
    let shouldSubscribe = false;

    if (!feedListeners.current[feed]) {
      shouldSubscribe = true;
      feedListeners.current[feed] = {};
    }

    const feedListenerId = uuid();
    feedListeners.current[feed][feedListenerId] = listener;

    if (shouldSubscribe) {
      socket.current?.send(JSON.stringify({ event: 'feed-subscribe', message: { feed } }));
    } else {
      // already subscribed to feed, serve cache instead
      const cachedState = feedCachedStates.current[feed];
      listener(cachedState);
    }

    return feedListenerId;
  });

  const { current: unsubscribeFromFeed } = useRef((feed: string, feedListenerId: string) => {
    delete feedListeners.current[feed][feedListenerId];

    if (Object.keys(feedListeners.current?.[feed]).length === 0) {
      socket.current?.send(JSON.stringify({ event: 'feed-unsubscribe', message: { feed } }));
    }
  });

  if (error) {
    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70%' }}>
        {error.message}
      </div>
    );
  }

  if (connectingSocket) {
    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70%' }}>
        Connecting to server events ...
      </div>
    );
  }

  return (
    <ServerEventsContext.Provider
      value={{
        addServerEventListener,
        removeServerEventListener,
        subscribeToFeed,
        unsubscribeFromFeed
      }}>
      {children}
    </ServerEventsContext.Provider>
  );
};
