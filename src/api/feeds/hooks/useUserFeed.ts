import { useFeed } from 'brawl-websocket';
import { PublicUser } from 'types/user/User';

type Options = {
  userId: string;
};

function useUserFeed<T = PublicUser>({ userId }: Options) {
  const { data, loading } = useFeed<{ user: T }>(`user.${userId}`);

  return {
    isLoading: loading,
    user: data?.user as T
  };
}

export default useUserFeed;
