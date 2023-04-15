import styled, { css } from 'styled-components';
import { Icon } from 'common/ui/Icon';

export const TournamentsWrapper = styled.div<{ isUserInTournament: boolean; listLength: number }>`
  flex: 1;
  display: grid;
  margin-top: 4px;
  ${({ listLength }) =>
    listLength === 1
      ? 'grid-template-columns: repeat(1, 1fr);'
      : listLength % 2 === 0 && listLength % 3 !== 0
      ? 'grid-template-columns: repeat(2, 1fr);'
      : 'grid-template-columns: repeat(3, 1fr);'}
  ${({ theme }) => css`
    grid-gap: ${theme.spacing.baseX4}px;
    margin-bottom: ${theme.spacing.baseX6}px;
  `}
`;

export const PillSubText = styled.div`
  display: block;
  border-radius: 20px;
  ${({ theme }) => css`
    color: ${theme.colors.textSecondaryLight};
  `}
`;

export const PillHeader = styled.div`
  display: block;
  margin-bottom: 3px;
  ${({ theme }) => css`
    ${theme.textStyles.title}
  `}
`;

export const Content = styled.div``;

export const CountDownInfo = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.baseX2}px;
    color: ${theme.colors.textSecondaryLight};
  `}
`;

export const StyledIcon = styled(Icon)`
  ${({ theme }) => css`
    height: ${theme.spacing.baseX3}px;
    width: ${theme.spacing.baseX3}px;
    fill: ${theme.colors.accent.base};
    margin-right: ${theme.spacing.base}px;
  `}
`;

export const Pill = styled.div`
  display: flex;
  align-items: center;
  border-radius: 30px;
  ${({ theme }) => css`
    padding: ${theme.spacing.baseX2}px ${theme.spacing.baseX3}px;
    background-color: ${theme.colors.surface.base};
  `}
`;

export const PillSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => css`
    column-gap: ${theme.spacing.baseX3}px;
    margin-top: ${theme.spacing.baseX2}px;
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
