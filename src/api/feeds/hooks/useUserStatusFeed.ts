import { useFeed } from 'brawl-websocket';
import { UserStatusEnum } from 'common/ui';

type Params = {
  userId: string;
};

const useUserStatusFeed = ({ userId }: Params) => {
  const { data, loading } = useFeed<{ status: UserStatusEnum }>(`user.status.${userId}`);

  return { status: UserStatusEnum[data.status], isLoading: loading };
};

export default useUserStatusFeed;
