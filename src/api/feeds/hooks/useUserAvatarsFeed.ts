import { useMemo } from 'react';
import { Avatar } from 'types/user/User';
import useFeed from './useFeed';

export default function useUserAvatarsFeed(userId: string) {
  const { currentState, isLoading } = useFeed<{ avatars: Avatar[] }>(`user.avatars.${userId}`);

  const avatarsMemo = useMemo(
    () =>
      currentState?.avatars
        ?.sort(
          (avatarA, avatarB) =>
            new Date(avatarB.createdAt).getTime() - new Date(avatarA.createdAt).getTime()
        )
        .sort((avatarA, avatarB) => Number(avatarA.default) - Number(avatarB.default)) || [],
    [currentState?.avatars]
  );

  return {
    avatars: avatarsMemo,
    isLoading
  };
}
