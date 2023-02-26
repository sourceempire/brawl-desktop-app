import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const TournamentHubInfoWrapper = styled.div<{
  isRegistrationClosed: boolean;
}>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  ${({ theme }) => css`
    column-gap: ${theme.spacing.base}px;
    row-gap: ${theme.spacing.base}px;
  `}
  ${({ isRegistrationClosed }) =>
    isRegistrationClosed &&
    css`
      grid-template-columns: repeat(1, 1fr);
    `}
`;

export const GridWithHeader = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'main';
  grid-auto-rows: 20px 1fr;
`;

export const GridHeader = styled.h2`
  display: block;
  grid-area: header;
`;

export const PredictedPrize = styled.div`
  height: 100%;
  display: grid;
  grid-auto-rows: 1fr;
  grid-area: main;
  ${({ theme }) => css`
    row-gap: ${theme.spacing.base}px;
  `};
`;
export const PrizeElement = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  ${({ theme }) => css`
    background-color: ${theme.colors.surface.base};
    border-radius: ${theme.borderRadius.default};
    padding-right: ${theme.spacing.baseX4}px;
    ${theme.textStyles.title}
  `};
`;

export const PrizePosition = styled.div`
  display: flex;
  aspect-ratio: 1/1;
  height: 100%;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    background-color: ${theme.colors.surfaceSecondary.base};
    ${theme.textStyles.title}
  `}
  font-size: 16px;
`;
