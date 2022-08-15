import { useContext, useEffect, useRef, useState } from 'react';
import { ServerEventsContext } from 'context';
import { usePrevious } from 'utils/hooks';

function useFeed<T>(feed: string) {
  const { subscribeToFeed, unsubscribeFromFeed } = useContext(ServerEventsContext);
  const [currentState, setCurrentState] = useState<{ [key: string]: unknown }>({});
  const [isLoading, setLoading] = useState(true);
  const feedListenerId = useRef() as { current: string };
  const previousFeed = usePrevious(feed);

  const feedListener = (updatedState: { [key: string]: unknown }) => {
    setLoading(false);
    setCurrentState(updatedState);
  };

  useEffect(() => {
    if (previousFeed !== undefined && previousFeed !== feed) {
      unsubscribeFromFeed(previousFeed, feedListenerId.current);
    }

    feedListenerId.current = subscribeToFeed(feed, feedListener);
    return () => unsubscribeFromFeed(feed, feedListenerId.current);
  }, [feed, subscribeToFeed, unsubscribeFromFeed, previousFeed]);

  return { currentState: currentState as unknown as T, isLoading };
}

export default useFeed;
