import { useFeed } from '@sourceempire/brawl-websocket';
import { PublicUser } from 'types/user/User';

type Params = {
  userId: string;
};

const useFriendsFeed = ({ userId }: Params) => {
  const { data, loading } = useFeed<{ friends: PublicUser[] }>(`friends.${userId}`);
  return {
    friends: data?.friends ?? [],
    isLoading: loading
  };
};

export default useFriendsFeed;
