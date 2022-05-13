/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Fetcher } from 'api';
import * as authRequests from 'api/requests/AuthRequests';
import SockJs from 'sockjs-client';
import { v4 as uuid } from 'uuid';

const CONNECTION_RETRIES_LIMIT = 5;

if (process.env.REACT_APP_SERVER_URL === undefined) {
  throw 'REACT_APP_SERVER_URL environment variable not set';
}

const url = `${process.env.REACT_APP_SERVER_URL}/api/events`;

type Context = {
  addEventListener: (event: string, listener: Listener) => string;
  removeEventListener: (event: string, listenerId: string) => void;
};

export const ServerEventsContext = React.createContext<Context>({
  addEventListener: () => '',
  removeEventListener: () => undefined
});

export type Listener = (message: Event) => void;
type Listeners = { [key: string]: { [key: string]: Listener } };

type Props = {
  children: React.ReactNode;
};

export const ServerEventsProvider = ({ children }: Props) => {
  const initialLoad = useRef<boolean>(true);
  const [error, setError] = useState<Error>();
  const socket = useRef<WebSocket>();
  const listeners = useRef<Listeners>({});
  const [connectingSocket, setConnectingSocket] = useState(true);
  const [connectionRetries, setConnectionRetries] = useState(0);

  const dispatchEvent = (event: string, message: Event) => {
    if (listeners.current[event] !== undefined) {
      Object.values(listeners.current[event]).forEach((event) => event(message));
    } else {
      console.log('Push event was recieved but not caught', { event, message });
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
    dispatchEvent(data.event, data.message);
  }, []);

  const handleError = (message: Event) => {
    if (message.eventPhase === EventSource.CLOSED) {
      socket.current?.close();
    } else {
      setError(Error('Oops, Something went wrong with the co'));
    }
  };

  const addEventListener = (event: string, listener: Listener) => {
    const listenerId = uuid();
    listeners.current[event] = { ...listeners.current[event], [listenerId]: listener };
    return listenerId;
  };

  const removeEventListener = (event: string, listenerId: string) => {
    delete listeners.current[event][listenerId];
  };

  const setupSocketConnection = useCallback(async () => {
    const result = await Fetcher.get(url + '/request', {});

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
        addEventListener,
        removeEventListener
      }}>
      {children}
    </ServerEventsContext.Provider>
  );
};
