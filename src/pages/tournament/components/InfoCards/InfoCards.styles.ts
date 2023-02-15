import styled, { css } from 'styled-components';
import { Icons } from 'common/ui';

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70px;
  ${({ theme }) => css`
    background: ${theme.colors.surfaceElement.base};
    border-radius: ${theme.borderRadius.default};
    padding: ${theme.spacing.baseX2}px;
  `};
`;

export const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => css`
    ${theme.textStyles.body}
    color: ${theme.colors.textSecondaryLight}
  `}
`;
export const InfoText = styled.h2`
  ${({ theme }) => css`
    ${theme.textStyles.title}
  `}
`;

export const GameNameIcon = styled(Icons.Controller)`
  height: 14px;
  width: 14px;
  ${({ theme }) => css`
    fill: ${theme.colors.textSecondaryLight};
    margin-right: ${theme.spacing.base}px;
  `}
`;

export const GameModeIcon = styled(Icons.Sword)`
  height: 14px;
  width: 14px;
  ${({ theme }) => css`
    fill: ${theme.colors.textSecondaryLight};
    margin-right: ${theme.spacing.base}px;
  `}
`;

export const MatchTypeIcon = styled(Icons.CrossedSwords)`
  height: 14px;
  width: 14px;
  ${({ theme }) => css`
    fill: ${theme.colors.textSecondaryLight};
    margin-right: ${theme.spacing.base}px;
  `}
`;

export const TournamentSizeIcon = styled(Icons.Friends)`
  height: 14px;
  width: 14px;
  ${({ theme }) => css`
    fill: ${theme.colors.textSecondaryLight};
    margin-right: ${theme.spacing.base}px;
  `}
`;

export const RegistrationCloseIcon = styled(Icons.LockClosed)`
  height: 14px;
  width: 14px;
  ${({ theme }) => css`
    fill: ${theme.colors.textSecondaryLight};
    margin-right: ${theme.spacing.base}px;
  `}
`;

export const TournamentStartIcon = styled(Icons.Calendar)`
  height: 14px;
  width: 14px;
  ${({ theme }) => css`
    fill: ${theme.colors.textSecondaryLight};
    margin-right: ${theme.spacing.base}px;
  `}
`;

export const PrizePoolIcon = styled(Icons.Trophy)`
  height: 14px;
  width: 14px;
  ${({ theme }) => css`
    fill: ${theme.colors.textSecondaryLight};
    margin-right: ${theme.spacing.base}px;
  `}
`;

export const EntryFeeIcon = styled(Icons.Ticket)`
  height: 14px;
  width: 14px;
  ${({ theme }) => css`
    fill: ${theme.colors.textSecondaryLight};
    margin-right: ${theme.spacing.base}px;
  `}
`;
