import { Avatar } from 'types/user/User';
import useFeed from './useFeed';

export default function useUserAvatarsFeed(userId: string) {
  const { currentState, isLoading } = useFeed<{ avatars: Avatar[] }>(`user.avatars.${userId}`);

  return {
    avatars: currentState.avatars || [],
    isLoading
  };
}
