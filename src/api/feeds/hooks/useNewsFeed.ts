import { useFeed } from 'brawl-websocket';

export type News = {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  timestamp: string;
};

const useNewsFeed = () => {
  const { data, loading } = useFeed<{ news: News[] }>('news');
  return {
    news: (data.news ?? []) as News[],
    isLoading: loading
  };
};

export default useNewsFeed;
