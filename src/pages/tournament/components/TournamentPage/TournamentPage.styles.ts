import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    gap: ${theme.spacing.baseX3}px;
    padding-bottom: ${theme.spacing.baseX4}px;
  `}
`;

export const TournamentContent = styled.div`
  flex-grow: 1;

  ${({ theme }) => css`
    padding: 0 ${theme.spacing.baseX3}px ${theme.spacing.baseX2}px;
    background-color: ${theme.colors.secondary.base};
    border-radius: ${theme.borderRadius.default};
  `}
`;

export const TournamentNavbar = styled.div`
  height: 52px;
  ${({ theme }) => css`
    border-bottom: 2px solid ${theme.colors.lightTint.base};
  `}
`;
