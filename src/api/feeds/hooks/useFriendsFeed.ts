import { PublicUser } from 'types/user/User';
import useFeed from './useFeed';

type Options = {
  userId: string;
};

const useFriendsFeed = ({ userId }: Options) => {
  const { currentState, isLoading } = useFeed<{ friends: PublicUser[] }>(`friends.${userId}`);
  return {
    friends: currentState?.friends ?? [],
    isLoading
  };
};

export default useFriendsFeed;
