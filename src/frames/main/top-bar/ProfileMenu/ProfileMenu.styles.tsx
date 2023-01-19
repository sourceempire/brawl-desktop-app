import styled, { css } from 'styled-components';
import { UserStatusEnum } from '../../../../common/components/UserStatus';
import UserStatus from '../../../../common/components/UserStatus/UserStatus';
import Icons from 'common/components/Icon/Icons';

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

  ${({ theme }) => css`
    padding-left: ${theme.spacing.base}px;
    border-radius: ${theme.borderRadius.default};
    right: -${theme.spacing.base / 2}px;
    padding: ${theme.spacing.base}px;

    :hover {
      background-color: ${theme.colors.background.hover};
      ${MyUserStatus} {
        outline: 3px solid ${theme.colors.background.hover};
      }
    }
  `}
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

export const MenuWrapper = styled.div``;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  width: 170px;

  ${({ theme }) => css`
    ${theme.textStyles.note}
    margin-left: -${theme.spacing.base}px;
    margin-right: -${theme.spacing.base}px;
    padding: ${theme.spacing.base * 1.5}px ${theme.spacing.base}px;
    border-radius: ${theme.borderRadius.default};
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
