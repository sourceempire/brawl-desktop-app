import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  flex-grow: 1;
  height: 100%;
`;

export const Matches = styled.div`
  position: relative;
  display: flex;
  gap: 6px;
  z-index: 1;
`;

export const MatchResultWrapper = styled.div`
  position: absolute;
  inset: 0;
  height: 100%;
`;

export const MatchRoundLink = styled(NavLink)`
  &.active {
    > * {
      ${({ theme }) => css`
        pointer-events: none;
        background-color: ${theme.colors.accent.base};
        color: ${theme.colors.textPrimaryDark};
      `}
    }
  }
`;
