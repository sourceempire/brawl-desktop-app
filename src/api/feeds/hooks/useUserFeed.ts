import { PublicUser } from 'types/user/User';
import useFeed from './useFeed';

type Options = {
  userId: string;
};

function useUserFeed<T = PublicUser>({ userId }: Options) {
  const { currentState, isLoading } = useFeed<{ user: T }>(`user.${userId}`);

  return {
    isLoading,
    user: currentState?.user as T
  };
}

export default useUserFeed;
