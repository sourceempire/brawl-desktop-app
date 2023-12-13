import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { roundGap } from '../Bracket/Bracket.styles';
import { firstRoundMatchGap } from '../Bracket/SingleEliminationBracket.styles';
import { MatchOutcome, WrapperProps } from './BracketMatch.types';
import { theme } from 'assets/styles/Theme';

export const teamHeight = 30;
export const teamGap = 3;

const outline = {
  [MatchOutcome.Win]: theme.colors.statusSuccess,
  [MatchOutcome.Loss]: theme.colors.statusError,
  [MatchOutcome.NotDecided]: theme.colors.secondary.hover
};

const lineColor = theme.colors.surfaceSecondary.base;

export const MatchTitle = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(calc(-100% - var(--spacing-base)));
`;

export const Background = styled.div<{ isThirdPlaceMatch?: boolean | undefined }>`
  position: relative;

  ${({ isThirdPlaceMatch }) =>
    isThirdPlaceMatch &&
    css`
      position: absolute;
      top: calc(50% + (${teamHeight}px * 2) + calc(var(--spacing-base) * 12));
      transform: translateX(var(--spacing-base-x7));
    `}
`;

export const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  border-radius: ${theme.borderRadius.default};
  box-shadow: 0 0 0 3px ${theme.colors.surfaceSecondary.base};
  background-color: ${theme.colors.surfaceSecondary.base};
`;

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.base / 2}px;

  :before,
  :after {
    content: '';
    position: absolute;
    width: ${roundGap / 2 - 6}px;
  }

  :before {
    left: -3.5px;
    top: ${teamHeight + 0.5}px;
    height: 3px;
    background-color: ${lineColor};
    transform: translateX(calc(-100% - 3px));

    ${({ isFirstMatch }) =>
      isFirstMatch &&
      css`
        display: none;
      `}
  }

  :after {
    right: -2.5px;
    border-right: 3px solid ${lineColor};
    transform: translateX(calc(100% + 3px));

    ${({ roundIndex }) => css`
      height: ${(Math.pow(2, roundIndex) * (teamHeight * 2 + teamGap + firstRoundMatchGap)) / 2}px;
    `}

    ${({ matchIndex }) =>
      matchIndex % 2 === 0
        ? css`
            border-top: 3px solid ${lineColor};
            border-top-right-radius: 6px;
            top: ${-1 + teamHeight + teamGap / 2}px;
          `
        : css`
            border-bottom: 3px solid ${lineColor};
            border-bottom-right-radius: 6px;
            bottom: ${-2 + teamHeight + teamGap / 2}px;
          `};

    ${({ isFinal }) =>
      isFinal &&
      css`
        display: none;
      `}
  }

  ${({ isThirdPlaceMatch }) =>
    isThirdPlaceMatch &&
    css`
      :after,
      :before {
        display: none;
      }
    `}

  ${({ matchOutcome }) =>
    matchOutcome !== null &&
    css`
      :before {
        background-color: ${theme.colors.statusSuccess};
      }
    `}

    ${({ matchOutcome }) =>
    matchOutcome === MatchOutcome.Win &&
    css`
      :after {
        border-color: ${theme.colors.statusSuccess};
      }
    `}
`;

export const TeamLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => css`
    height: ${theme.spacing.baseX5}px;
    width: ${theme.spacing.baseX5}px;
    background-color: ${theme.colors.secondary.base};
  `};
`;

export const TeamLogoImage = styled.img`
  height: 65%;
  width: 65%;
  object-fit: contain;
  opacity: 0.5; // Remove when actual team image is implemented
`;

export const Team = styled.div`
  display: flex;
  height: ${teamHeight}px;
  gap: ${teamGap}px;
`;

export const TeamScore = styled.div<{ winner?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  height: ${teamHeight}px;
  width: ${teamHeight}px;
  ${({ theme, winner }) => css`
    background-color: ${theme.colors.secondary.base};
    ${winner &&
    css`
      background-color: ${theme.colors.accent.base};
      color: ${theme.colors.textPrimaryDark};
    `}
  `}
`;

export const TeamName = styled.div`
  display: inline-block;
  height: ${teamHeight}px;
  line-height: ${teamHeight}px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 13px;

  ${({ theme }) => css`
    padding: 0 ${theme.spacing.base}px;
    background-color: ${theme.colors.secondary.base};
  `}
`;

export const Team1 = styled(Team)<{ matchOutcome?: MatchOutcome | null }>`
  ${({ theme, matchOutcome }) => css`
    ${TeamLogo} {
      border-top-left-radius: ${theme.borderRadius.default};
    }
    ${TeamScore} {
      border-top-right-radius: ${theme.borderRadius.default};
    }

    ${matchOutcome &&
    css`
      outline: 3px solid ${outline[matchOutcome]};
      outline-offset: 0;
      border-radius: ${theme.borderRadius.default};
    `}
  `}
`;

export const Team2 = styled(Team)<{ matchOutcome?: MatchOutcome | null }>`
  ${({ theme, matchOutcome }) => css`
    ${TeamLogo} {
      border-bottom-left-radius: ${theme.borderRadius.default};
    }
    ${TeamScore} {
      border-bottom-right-radius: ${theme.borderRadius.default};
    }

    ${matchOutcome &&
    css`
      outline: 3px solid ${outline[matchOutcome]};
      outline-offset: 0px;
      border-radius: ${theme.borderRadius.default};
    `}
  `}
`;
