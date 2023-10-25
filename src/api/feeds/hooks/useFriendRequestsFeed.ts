import { useFeed } from '@sourceempire/brawl-websocket';
import { PublicUser } from 'types/user/User';

type Params = {
  userId: string;
};

const useFriendRequestFeed = ({ userId }: Params) => {
  const feed = useFeed<{ requestUsers: PublicUser[] }>(`friend.requests.${userId}`);

  if (feed.loading) {
    return { isLoading: feed.loading };
  }

  return { requestUsers: feed.data.requestUsers, isLoading: feed.loading };
};

export default useFriendRequestFeed;
