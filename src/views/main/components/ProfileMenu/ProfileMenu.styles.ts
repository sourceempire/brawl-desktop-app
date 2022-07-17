import ArrowDownIcon from 'common/ui-components/icons/ArrowDown';
import styled, { css } from 'styled-components';

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

export const UserStatusPlaceholder = styled.div`
  position: absolute;
  right: -6px;
  bottom: -1px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  box-sizing: content-box;

  ${({ theme }) => css`
    border: 2px solid ${theme.colors.background};
    background-color: ${theme.colors.statusSuccess};
  `}
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
