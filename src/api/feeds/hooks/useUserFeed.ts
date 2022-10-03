import { PublicUser } from 'types/user/User';
import useFeed from './useFeed';

type Options = {
  userId: string;
};

const useUserFeed = ({ userId }: Options) => {
  const { currentState, isLoading } = useFeed<{ user: PublicUser }>(`user.${userId}`);

  return {
    isLoading,
    user: currentState?.user ?? {}
  };
};

export default useUserFeed;
