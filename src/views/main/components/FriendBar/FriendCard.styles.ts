import styled, { css } from 'styled-components/macro';
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
  display: flex;
  position: relative;
`;

export const FriendUserStatus = styled(UserStatus)`
  position: absolute;
  right: -3px;
  bottom: -3px;
  ${({ theme, status }) => css`
    outline: 2px solid ${theme.colors.secondary};
    height: ${theme.spacing.baseX2}px;
    width: ${theme.spacing.baseX2}px;

    ${status === UserStatusEnum.OFFLINE &&
    css`
      background-color: ${theme.colors.secondary};
    `}
  `}
`;

export const FriendContextMenu = styled.div``;

export const FriendOptions = styled.div`
  width: 120px;
`;
export const FriendOption = styled.div`
  ${({ theme }) => css`
    ${theme.textStyles.note}
    padding: calc(${theme.spacing.base}px * 1.5) ${theme.spacing.base}px;
    border-radius: ${theme.borderRadius.default};
    :hover {
      background-color: ${theme.colors.lightTint};
    }
  `}
`;
