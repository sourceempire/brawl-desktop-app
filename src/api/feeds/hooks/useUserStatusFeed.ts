import { UserStatusEnum } from 'frames/main/components/UserStatus';
import useFeed from './useFeed';

type Options = {
  userId: string;
};

const useUserStatusFeed = ({ userId }: Options) => {
  const { isLoading, currentState } = useFeed<{ status: UserStatusEnum }>(`user.status.${userId}`);

  if (!isLoading) {
    return { status: UserStatusEnum[currentState.status], isLoading };
  }

  return { status: UserStatusEnum[currentState.status], isLoading };
};

export default useUserStatusFeed;
