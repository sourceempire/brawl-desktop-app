import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding-top: ${(props) => props.theme.titleBarHeight}px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const RoutesContainer = styled.div<{ isFriendBarVisible: boolean }>`
  overflow-y: scroll;
  flex-grow: 1;
  ${({ theme, isFriendBarVisible }) => css`
    padding: 0 ${theme.spacing.baseX4}px ${theme.spacing.baseX4}px;
    ${isFriendBarVisible &&
    css`
      padding-right: calc(${theme.spacing.baseX4}px + ${theme.friendsBarWidth}px);
    `}
  `}
`;
