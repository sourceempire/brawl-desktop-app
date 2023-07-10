import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    gap: ${theme.spacing.baseX3}px;
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
    background-color: ${theme.colors.surface.base};
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
    border-bottom: 2px solid ${theme.colors.surface.base};
    margin: 0 -${theme.spacing.baseX3}px;
    padding: 0 ${theme.spacing.baseX3}px;
  `}
`;

export const RightAlignedContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TournamentRoutesWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  overflow: scroll;

  ${({ theme }) => css`
    padding: ${theme.spacing.baseX3}px ${theme.spacing.baseX3}px 0;
    margin: 0 -${theme.spacing.baseX3}px;
  `}
`;

export const SpectatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TournamentName = styled.h2`
  display: block;
  width: 100%;
  text-align: center;
  ${({ theme }) => css`
    ${theme.textStyles.stylizedHeader}
    margin-bottom: ${theme.spacing.baseX4}px;
    font-size: 24px;
  `};
`;
