import useFeed from './useFeed';

type News = {
  id: string;
  title: string;
  content: string;
  image_url: string;
  time_stamp: string;
};

const useNewsFeed = () => {
  const { currentState, isLoading } = useFeed<{ news: News[] }>('news');
  return {
    news: (currentState.news ?? []) as News[],
    isLoading
  };
};

export default useNewsFeed;
