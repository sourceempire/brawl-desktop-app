import { useFeed } from '@sourceempire/brawl-websocket';

export type News = {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  timestamp: string;
};

const useNewsFeed = () => {
  const feed = useFeed<{ news: News[] }>('news');

  if (feed.loading) {
    return { isLoading: feed.loading };
  }

  return {
    news: feed.data.news,
    isLoading: feed.loading
  };
};

export default useNewsFeed;
