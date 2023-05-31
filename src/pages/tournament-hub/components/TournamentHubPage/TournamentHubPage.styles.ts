import styled, { css } from 'styled-components';
import { Icon } from 'common/ui/Icon';

export const TournamentsWrapper = styled.div<{ listLength: number }>`
  flex: 1;
  display: grid;
  overflow: scroll;
  ${({ listLength }) => {
    if (listLength === 1) {
      return css`
        grid-template-columns: repeat(1, 1fr);
      `;
    }

    if (!(listLength % 2) && listLength % 3) {
      return css`
        grid-template-columns: repeat(2, 1fr);
      `;
    }

    return css`
      grid-template-columns: repeat(3, 1fr);
    `;
  }}

  ${({ theme }) => css`
    grid-gap: ${theme.spacing.baseX4}px;
    margin-bottom: ${theme.spacing.baseX2}px;
    padding-bottom: ${theme.spacing.baseX4}px;
  `}
`;
export const CountDownInfo = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.baseX2}px;
    color: ${theme.colors.textSecondaryLight};
  `}
`;

export const TournamentInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  ${({ theme }) => css`
    gap: ${theme.spacing.baseX3}px;
    margin-top: ${theme.spacing.baseX2}px;
  `}
`;

export const TournamentName = styled.div`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  ${({ theme }) => css`
    font-family: ${theme.fonts.stylized};
    padding: ${theme.spacing.baseX4}px 0 ${theme.spacing.baseX2}px;
  `}
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50px;
  gap: 20px;
  ${({ theme }) => css`
    padding: ${theme.spacing.baseX3}px ${theme.spacing.baseX5}px;
    background-color: ${theme.colors.surface.base};
  `}
`;

export const InfoIcon = styled(Icon)`
  ${({ theme }) => css`
    width: 20px;
    fill: ${theme.colors.accent.base};
    margin-right: ${theme.spacing.base}px;
  `}
`;

export const InfoText = styled.div``;

export const InfoSubText = styled.div`
  border-radius: 20px;
  ${({ theme }) => css`
    color: ${theme.colors.textSecondaryLight};
  `}
`;

export const InfoHeader = styled.div`
  ${({ theme }) => css`
    ${theme.textStyles.title}
  `}
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  ${({ theme }) => css`
    margin-top: ${theme.spacing.base}px;
    margin-bottom: ${theme.spacing.baseX4}px;
  `}
`;

export const HeaderHub = styled.h2`
  display: block;
  width: 100%;
  text-align: center;
  ${({ theme }) => css`
    ${theme.textStyles.stylizedHeader}
    margin-bottom: ${theme.spacing.baseX2}px;
    font-size: 24px;
  `};
`;

export const LeftButtons = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => css`
    column-gap: ${theme.spacing.base}px;
  `}
`;

export const RightButtons = styled.div``;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.baseX2}px;
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const InfoWrapper = styled.div``;

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

export const HubHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
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
