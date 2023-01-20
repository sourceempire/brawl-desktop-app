import { useFeed } from 'brawl-websocket';
import { PublicUser } from 'types/user/User';

type Options = {
  userId: string;
};

const useFriendsFeed = ({ userId }: Options) => {
  const { data, loading } = useFeed<{ friends: PublicUser[] }>(`friends.${userId}`);
  return {
    friends: data?.friends ?? [],
    isLoading: loading
  };
};

export default useFriendsFeed;
