import { StatusCircle, StatusIcon } from './UserStatus.styles';
import { Props, UserStatusEnum } from './UserStatus.types';
import userStatusAwayUrl from 'assets/images/user-status-away.svg';
import userStatusBusyUrl from 'assets/images/user-status-busy.svg';

export const statusTexts = {
  [UserStatusEnum.ONLINE]: 'Online',
  [UserStatusEnum.AWAY]: 'Away',
  [UserStatusEnum.BUSY]: 'Busy',
  [UserStatusEnum.OFFLINE]: 'Appear Offline'
};

export const UserStatus = ({ status = UserStatusEnum.OFFLINE, className }: Props) => {
  return (
    <StatusCircle status={status} className={className}>
      {status === UserStatusEnum.BUSY && <StatusIcon src={userStatusBusyUrl} />}
      {status === UserStatusEnum.AWAY && <StatusIcon src={userStatusAwayUrl} />}
    </StatusCircle>
  );
};
