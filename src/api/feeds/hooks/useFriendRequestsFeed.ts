import { PublicUser } from 'types/user/User';
import useFeed from './useFeed';

type Options = {
  userId: string;
};

const useFriendRequestFeed = ({ userId }: Options) => {
  const { currentState, isLoading } = useFeed<{ requestUsers: PublicUser[] }>(
    `friend.requests.${userId}`
  );
  return { requestUsers: currentState.requestUsers, isLoading };
};

export default useFriendRequestFeed;
