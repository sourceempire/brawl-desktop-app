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

export const Username = styled.div`
  padding: 6px;
  font-size: 13px;
  font-weight: bold;
`;

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
