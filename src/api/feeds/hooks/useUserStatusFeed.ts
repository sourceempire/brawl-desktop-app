import { UserStatusEnum } from 'views/main/components/UserStatus';
import useFeed from './useFeed';

type Options = {
  userId: string;
};

const useUserStatusFeed = ({ userId }: Options) => {
  const feed = useFeed<{ status: UserStatusEnum }>(`user.status.${userId}`);
  return { status: UserStatusEnum[feed.currentState.status] };
};

export default useUserStatusFeed;
