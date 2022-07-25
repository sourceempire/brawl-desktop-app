import ArrowDownIcon from 'common/ui-components/icons/ArrowDown';
import styled, { css } from 'styled-components';
import UserStatus from '../UserStatus/UserStatus';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ProfileImagePlaceholder = styled.div`
  position: relative;
  height: 48px;
  width: 48px;

  ${({ theme }) => css`
    border-radius: ${theme.borderRadius.default};
    background-color: ${theme.colors.lightTint};
  `}
`;

export const ArrowIcon = styled(ArrowDownIcon)`
  width: 10px;
  margin-right: 12px;
`;

export const MyUserStatus = styled(UserStatus)`
  position: absolute;
  right: -6px;
  bottom: -1px;
  height: 14px;
  width: 14px;

  ${({ theme }) => css`
    outline: 2px solid ${theme.colors.background};
    background-color: ${theme.colors.background};
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
