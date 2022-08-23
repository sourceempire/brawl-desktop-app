import { UserStatusEnum } from 'common/components/UserStatus';

export const statusSortOrder = {
  [UserStatusEnum.ONLINE]: 0,
  [UserStatusEnum.AWAY]: 1,
  [UserStatusEnum.BUSY]: 2,
  [UserStatusEnum.OFFLINE]: 3
};

export type FriendRef = {
  userId: string;
  status: UserStatusEnum;
  isLoadingStatus: boolean;
};
