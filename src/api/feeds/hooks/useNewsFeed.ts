import useFeed from './useFeed';

type News = {
  id: string;
  title: string;
  content: string;
  image_url: string;
  time_stamp: string;
};

const useNewsFeed = (): News[] | undefined => {
  const { currentState } = useFeed('news');
  return currentState?.news as News[];
};

export default useNewsFeed;
