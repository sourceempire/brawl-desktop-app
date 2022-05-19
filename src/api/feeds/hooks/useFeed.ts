import { useContext, useEffect, useState } from 'react';
import { ServerEventsContext } from 'api/events';

const useFeed = (feed: string) => {
  const { subscribeToFeed, unsubscribeFromFeed } = useContext(ServerEventsContext);
  const [currentState, setCurrentState] = useState<{ [key: string]: unknown }>({});
  const [isLoading, setLoading] = useState(true);

  const feedListener = (updatedState: { [key: string]: unknown }) => {
    setLoading(false);
    setCurrentState(updatedState);
  };

  useEffect(() => {
    const feedListenerId = subscribeToFeed(feed, feedListener);
    return () => unsubscribeFromFeed(feed, feedListenerId);
  }, [feed, subscribeToFeed, unsubscribeFromFeed]);

  return { currentState, isLoading };
};

export default useFeed;
