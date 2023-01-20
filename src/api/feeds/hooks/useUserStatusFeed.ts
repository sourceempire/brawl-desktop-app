import { useFeed } from 'brawl-websocket';
import { UserStatusEnum } from 'common/components/UserStatus';

type Options = {
  userId: string;
};

const useUserStatusFeed = ({ userId }: Options) => {
  const { data, loading } = useFeed<{ status: UserStatusEnum }>(`user.status.${userId}`);

  return { status: UserStatusEnum[data.status], isLoading: loading };
};

export default useUserStatusFeed;
