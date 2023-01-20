import { useMemo } from 'react';
import { useFeed } from 'brawl-websocket';
import { Avatar } from 'types/user/User';

export default function useUserAvatarsFeed(userId: string) {
  const { data, loading } = useFeed<{ avatars: Avatar[] }>(`user.avatars.${userId}`);

  const avatarsMemo = useMemo(
    () =>
      data?.avatars
        ?.sort(
          (avatarA, avatarB) =>
            new Date(avatarB.createdAt).getTime() - new Date(avatarA.createdAt).getTime()
        )
        .sort((avatarA, avatarB) => Number(avatarA.default) - Number(avatarB.default)) || [],
    [data?.avatars]
  );

  return {
    avatars: avatarsMemo,
    isLoading: loading
  };
}
