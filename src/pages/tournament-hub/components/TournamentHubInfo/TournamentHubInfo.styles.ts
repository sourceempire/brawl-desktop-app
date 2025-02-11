import styled from '@emotion/styled';
import { css } from '@emotion/react';

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

export const InfoHeaderWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'main';
  grid-auto-rows: 20px 1fr;
`;

export const Header = styled.h2`
  display: block;
  grid-area: header;
`;

export const PredictedPrize = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
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
    font: ${theme.textStyles.title};
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
    font: ${theme.textStyles.title};
  `}
  font-size: 16px;
`;
