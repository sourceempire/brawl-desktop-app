import styled, { css } from 'styled-components/macro';

export const Wrapper = styled.div<{ isFriendBarVisible: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  margin-bottom: 24px;
  flex-shrink: 0;

  ${({ theme, isFriendBarVisible }) => css`
    height: ${theme.topBarHeight}px;
    ${isFriendBarVisible &&
    css`
      width: calc(100% - ${theme.friendsBarWidth}px);
    `}
  `}
`;

export const TopBarActions = styled.div`
  display: flex;
  align-items: center;
  > * {
    ${({ theme }) => css`
      margin-right: ${theme.spacing.baseX3}px;
    `}
    :last-child {
      margin-right: 0;
    }
  }
`;

export const PlaceholderLogo = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  margin-right: 24px;

  ${({ theme }) => css`
    background-color: ${theme.colors.primary.base};
  `}
`;
