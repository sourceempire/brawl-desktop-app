import { useFeed } from '@sourceempire/brawl-websocket';
import { UserStatusEnum } from 'common/ui';

type Params = {
  userId: string;
};

const useUserStatusFeed = ({ userId }: Params) => {
  const feed = useFeed<{ status: UserStatusEnum }>(`user.status.${userId}`);

  if (feed.loading) {
    return { isLoading: feed.loading };
  }

  return { status: UserStatusEnum[feed.data.status], isLoading: feed.loading };
};

export default useUserStatusFeed;
