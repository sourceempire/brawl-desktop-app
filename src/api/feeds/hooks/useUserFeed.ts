import { PublicUser } from 'api/requests/UserRequests';
import useFeed from './useFeed';

type Options = {
  userId: string;
};

const useUserFeed = ({ userId }: Options) => {
  const { currentState } = useFeed<{ user: PublicUser }>(`user.${userId}`);

  return currentState?.user;
};

export default useUserFeed;
