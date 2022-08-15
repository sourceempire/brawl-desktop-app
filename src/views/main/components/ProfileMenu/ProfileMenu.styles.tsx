import styled, { css } from 'styled-components';
import { UserStatusEnum } from '../UserStatus';
import UserStatus from '../UserStatus/UserStatus';
import Icons from 'assets/icons/Icons';
import { theme } from 'assets/styles/Theme';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  box-sizing: content-box;
  right: -3px;
  padding: 3px;
  padding-left: 6px;
  border-radius: 3px;
  :hover {
    background-color: ${theme.colors.secondary};
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${({ theme }) => css`
    border-radius: ${theme.borderRadius.default};
  `}
`;

export const ProfileImageContainer = styled.div`
  position: relative;
  height: 48px;
  width: 48px;

  ${({ theme }) => css`
    border-radius: ${theme.borderRadius.default};
    background-color: black;
  `}
`;

export const ArrowIcon = styled(Icons.ArrowDown)`
  width: 10px;
  margin-right: 12px;
`;

export const MyUserStatus = styled(UserStatus)`
  position: absolute;
  right: -6px;
  bottom: -3px;
  height: 14px;
  width: 14px;

  ${({ theme, status }) => css`
    outline: 3px solid ${theme.colors.background};
    background-color: ${status === UserStatusEnum.OFFLINE && theme.colors.background};
  `}
`;

const UserTagWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 1;

  ${({ theme }) => css`
    height: ${theme.spacing.baseX4}px;
    margin-left: ${theme.spacing.base}px;
    margin-top: ${theme.spacing.base}px;
  `}
`;

const UserTagText = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${({ theme }) => css`
    ${theme.textStyles.title}
    padding-right: ${theme.spacing.base}px;
  `}
`;

export const UserTag = ({ children }: { children: React.ReactNode }) => (
  <UserTagWrapper>
    <UserTagText>{children}</UserTagText>
  </UserTagWrapper>
);

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  width: 156px;
  padding: 0 6px;
  font-size: 11px;
  cursor: pointer;
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius.default};
    :hover {
      background-color: ${theme.colors.lightTint};
    }
  `}
`;

export const HorizontalRule = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  margin: 3px 0;
`;
