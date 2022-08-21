import useFeed from './useFeed';

export type News = {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  timestamp: string;
};

const useNewsFeed = () => {
  const { currentState, isLoading } = useFeed<{ news: News[] }>('news');
  return {
    news: (currentState.news ?? []) as News[],
    isLoading
  };
};

export default useNewsFeed;
