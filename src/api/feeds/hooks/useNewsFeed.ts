import useFeed from './useFeed';

type News = {
  id: string;
  title: string;
  content: string;
  image_url: string;
  time_stamp: string;
};

const useNewsFeed = () => {
  const { currentState } = useFeed('news');
  return {
    news: (currentState.news ?? []) as News[],
    isLoading: currentState.isLoading
  };
};

export default useNewsFeed;
