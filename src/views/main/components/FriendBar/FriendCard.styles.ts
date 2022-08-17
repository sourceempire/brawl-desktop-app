import styled, { css } from 'styled-components';
import UserStatus, { UserStatusEnum } from '../UserStatus';
import { UserCard } from './Shared.styles';

const getFriendOrder = (status: UserStatusEnum) => {
  return {
    [UserStatusEnum.ONLINE]: '1',
    [UserStatusEnum.AWAY]: '2',
    [UserStatusEnum.BUSY]: '3',
    [UserStatusEnum.OFFLINE]: '4'
  }[status];
};

export const FriendUserCard = styled(UserCard)<{ status: UserStatusEnum }>`
  ${({ status }) => css`
    order: ${getFriendOrder(status)};
  `}
`;

export const ProfileImageWrapper = styled.div`
  position: relative;
`;

export const FriendUserStatus = styled(UserStatus)`
  position: absolute;
  right: 0;
  bottom: 0;

  transform: translate(50%, 0);
  ${({ theme, status }) => css`
    outline: 3px solid ${theme.colors.secondary};
    height: ${theme.spacing.baseX2}px;
    width: ${theme.spacing.baseX2}px;

    ${status === UserStatusEnum.OFFLINE &&
    css`
      background-color: ${theme.colors.secondary};
    `}
  `}
`;
