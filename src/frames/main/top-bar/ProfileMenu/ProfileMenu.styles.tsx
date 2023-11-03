import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { UserStatus, UserStatusEnum } from 'common/ui';
import { ArrowDown } from 'frames/main/friends/components/FriendRequestList/FriendRequestList.styles';

export const MyUserStatus = styled(UserStatus)`
  position: absolute;
  right: -4px;
  bottom: -2px;

  ${({ theme, status }) => css`
    height: 14px;
    width: 14px;
    outline: 3px solid ${theme.colors.background.base};
    background-color: ${status === UserStatusEnum.OFFLINE && theme.colors.background.base};
  `}
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  box-sizing: content-box;
  border-radius: var(--border-radius-default);
  cursor: pointer;

  :hover {
    filter: brightness(1.1);
  }

  ${({ theme }) => css`
    padding-left: ${theme.spacing.base}px;
    right: -${theme.spacing.base / 2}px;
    padding: ${theme.spacing.base}px;
  `}
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  border-radius: var(--border-radius-default);
`;

export const ProfileImageContainer = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  border-radius: var(--border-radius-default);
`;

export const ArrowIcon = styled(ArrowDown)`
  width: 10px;
  margin-right: 12px;
`;

export const MenuWrapper = styled.div``;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  width: 170px;
  border-radius: var(--border-radius-round);

  ${({ theme }) => css`
    ${theme.textStyles.note}
    margin-left: -${theme.spacing.base}px;
    margin-right: -${theme.spacing.base}px;
    padding: ${theme.spacing.base * 1.5}px ${theme.spacing.base}px;
    :hover {
      background-color: ${theme.colors.secondary.hover};
    }
  `}
`;

export const HorizontalRule = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  width: 100%;
  margin: 3px 0;
`;
