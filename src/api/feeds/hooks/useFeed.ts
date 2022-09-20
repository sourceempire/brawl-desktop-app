import { useContext, useEffect, useRef, useState } from 'react';
import { ServerEventsContext } from 'context';

function useFeed<T>(feed: string) {
  const { subscribeToFeed, unsubscribeFromFeed } = useContext(ServerEventsContext);
  const [currentState, setCurrentState] = useState<{ [key: string]: unknown }>({});
  const [isLoading, setLoading] = useState(true);
  const feedListenerId = useRef() as { current: string };

  const feedListener = (updatedState: { [key: string]: unknown }) => {
    setLoading(false);
    setCurrentState(updatedState);
  };

  useEffect(() => {
    feedListenerId.current = subscribeToFeed(feed, feedListener);
    return () => unsubscribeFromFeed(feed, feedListenerId.current);
  }, [feed, subscribeToFeed, unsubscribeFromFeed]);

  return { currentState: currentState as unknown as T, isLoading };
}

export default useFeed;
