import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { EllipsisText, UserStatus, UserStatusEnum } from 'common/ui';
import { UserCard } from '../Shared.styles';

export const FriendUserCard = styled(UserCard)<{ isHidden: boolean }>`
  ${({ isHidden }) => css`
    display: ${isHidden ? 'none' : 'flex'};
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
    outline: 2px solid ${theme.colors.secondary.base};
    height: ${theme.spacing.baseX2}px;
    width: ${theme.spacing.baseX2}px;

    ${status === UserStatusEnum.OFFLINE &&
    css`
      background-color: ${theme.colors.secondary.base};
    `}
  `}
`;

export const FriendContextMenu = styled.div``;

export const FriendOptions = styled.div`
  width: 120px;
`;
export const FriendOption = styled.div`
  ${({ theme }) => css`
    font: ${theme.textStyles.note};
    margin-left: -${theme.spacing.base}px;
    margin-right: -${theme.spacing.base}px;
    padding: calc(${theme.spacing.base}px * 1.5) ${theme.spacing.base}px;
    border-radius: ${theme.borderRadius.default};
    :hover {
      background-color: ${theme.colors.secondary.hover};
    }
  `}
`;

export const UserTag = styled(EllipsisText)`
  ${({ theme }) => css`
    font: ${theme.textStyles.title};
    margin-left: ${theme.spacing.baseX2}px;
  `}
`;
