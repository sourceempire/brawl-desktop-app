import { useFeed } from '@sourceempire/brawl-websocket';
import { PublicUser } from 'types/user/User';

type Params = {
  userId: string;
};

function useUserFeed<T = PublicUser>({ userId }: Params) {
  const { data, loading } = useFeed<{ user: T }>(`user.${userId}`);

  return {
    isLoading: loading,
    user: data?.user as T
  };
}

export default useUserFeed;
