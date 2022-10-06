import styled, { css } from 'styled-components/macro';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => css`
    gap: ${theme.spacing.baseX3}px;
    padding-bottom: ${theme.spacing.baseX4}px;
  `}
`;

export const TournamentContent = styled.div`
  display: flex;
  flex-direction: column;

  flex-grow: 1;
  width: 100%;
  max-width: 1440px;
  max-height: 512px;

  ${({ theme }) => css`
    padding: 0 ${theme.spacing.baseX3}px ${theme.spacing.baseX2}px;
    background-color: ${theme.colors.secondary.base};
    border-radius: ${theme.borderRadius.default};
  `}
`;

export const TournamentNavbar = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: 1fr auto 1fr;
  min-height: 52px;
  ${({ theme }) => css`
    border-bottom: 2px solid ${theme.colors.lightTint.base};
  `}
`;

export const RightAlignedContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TournamentRoutesWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  padding-top: 18px;
  overflow: scroll;
`;
