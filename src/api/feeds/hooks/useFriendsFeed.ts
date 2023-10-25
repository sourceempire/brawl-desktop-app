import { useFeed } from '@sourceempire/brawl-websocket';
import { PublicUser } from 'types/user/User';

type Params = {
  userId: string;
};

const useFriendsFeed = ({ userId }: Params) => {
  const feed = useFeed<{ friends: PublicUser[] }>(`friends.${userId}`);

  if (feed.loading) {
    return { isLoading: feed.loading };
  }

  return {
    friends: feed.data.friends,
    isLoading: feed.loading
  };
};

export default useFriendsFeed;
