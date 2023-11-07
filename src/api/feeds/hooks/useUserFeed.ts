import { useFeed } from '@sourceempire/brawl-websocket';
import { PublicUser } from 'types/user/User';

type Params = {
  userId: string;
};

function useUserFeed<T = PublicUser>({ userId }: Params) {
  const state = useFeed<{ user: T }>(`user.${userId}`);

  if (state.loading) {
    return {
      isLoading: state.loading
    };
  }

  return {
    isLoading: state.loading,
    user: state.data.user
  };
}

export default useUserFeed;
