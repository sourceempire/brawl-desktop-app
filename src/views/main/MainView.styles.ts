import styled, { css } from 'styled-components/macro';

export const Wrapper = styled.div`
  padding-top: ${(props) => props.theme.titleBarHeight}px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const RoutesContainer = styled.div<{ areFriendsVisible: boolean }>`
  overflow-y: scroll;
  flex-grow: 1;
  ${({ theme, areFriendsVisible }) => css`
    padding: 0 ${theme.spacing.baseX4}px;
    ${areFriendsVisible &&
    css`
      padding-right: calc(${theme.spacing.baseX4}px + ${theme.friendsBarWidth}px);
    `}
  `}
`;
