import { useFeed } from 'brawl-websocket';
import { PublicUser } from 'types/user/User';

type Params = {
  userId: string;
};

const useFriendRequestFeed = ({ userId }: Params) => {
  const { data, loading } = useFeed<{ requestUsers: PublicUser[] }>(`friend.requests.${userId}`);
  return { requestUsers: data.requestUsers, isLoading: loading };
};

export default useFriendRequestFeed;
