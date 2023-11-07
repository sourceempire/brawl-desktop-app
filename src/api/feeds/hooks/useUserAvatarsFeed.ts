import { useFeed } from '@sourceempire/brawl-websocket';
import { Avatar } from 'types/user/User';

type Params = {
  userId: string;
};

export default function useUserAvatarsFeed({ userId }: Params) {
  const feed = useFeed<{ avatars: Avatar[] }>(`user.avatars.${userId}`);

  if (feed.loading) {
    return {
      isLoading: feed.loading
    };
  }

  const avatars = feed.data.avatars
    .sort(
      (avatarA, avatarB) =>
        new Date(avatarB.createdAt).getTime() - new Date(avatarA.createdAt).getTime()
    )
    .sort((avatarA, avatarB) => Number(avatarA.default) - Number(avatarB.default));

  return {
    avatars,
    isLoading: feed.loading
  };
}
