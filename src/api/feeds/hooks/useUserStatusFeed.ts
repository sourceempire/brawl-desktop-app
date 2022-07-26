import { UserStatusEnum } from 'views/main/components/UserStatus';
import useFeed from './useFeed';

type Options = {
  userId: string;
};

type EnumValues = 'ONLINE' | 'AWAY' | 'BUSY' | 'OFFLINE';

const useUserStatusFeed = ({ userId }: Options) => {
  const feed = useFeed<{ status: EnumValues }>(`user.status.${userId}`);
  return { status: UserStatusEnum[feed.currentState.status] };
};

export default useUserStatusFeed;
