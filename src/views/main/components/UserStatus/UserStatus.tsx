import { StatusCircle, StatusIcon, StatusText, Wrapper } from './UserStatus.styles';
import { Props, UserStatusEnum } from './UserStatus.types';
import userStatusAwayUrl from 'assets/images/user-status-away.svg';
import userStatusBusyUrl from 'assets/images/user-status-busy.svg';

const statusTexts = {
  [UserStatusEnum.ONLINE]: 'Online',
  [UserStatusEnum.AWAY]: 'Away',
  [UserStatusEnum.BUSY]: 'Busy',
  [UserStatusEnum.OFFLINE]: 'Appear Offline'
};

const UserStatus = ({ status, hideText, className }: Props) => {
  return (
    <Wrapper>
      <StatusCircle status={status} className={className}>
        {status === UserStatusEnum.BUSY && <StatusIcon src={userStatusBusyUrl} />}
        {status === UserStatusEnum.AWAY && <StatusIcon src={userStatusAwayUrl} />}
      </StatusCircle>
      {!hideText && <StatusText>{statusTexts[status]}</StatusText>}
    </Wrapper>
  );
};

export default UserStatus;
