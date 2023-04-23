import styled, { css } from 'styled-components';
import { roundGap } from '../Bracket/Bracket.styles';
import { firstRoundMatchGap } from '../Bracket/SingleEliminationBracket.styles';
import { theme } from 'assets/styles/Theme';

export const teamHeight = 30;
export const teamGap = 3;

type WrapperProps = {
  matchIndex: number;
  roundIndex: number;
  isFinal: boolean;
  isFirstMatch: boolean;
};

const lineColor = theme.colors.secondary.hover;

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  ${({ theme }) => css`
    gap: ${theme.spacing.base / 2}px;
  `}

  :before, :after {
    content: '';
    position: absolute;
    width: ${roundGap / 2 - 3}px;
  }

  :before {
    top: ${teamHeight}px;
    height: 2px;
    background-color: ${lineColor};
    transform: translateX(calc(-100% - 3px));

    ${({ isFirstMatch }) =>
      isFirstMatch &&
      css`
        display: none;
      `}
  }

  :after {
    right: 0;
    border-right: 2px solid ${lineColor};
    transform: translateX(calc(100% + 3px));

    ${({ roundIndex }) => css`
      height: ${(Math.pow(2, roundIndex) * (teamHeight * 2 + teamGap + firstRoundMatchGap)) / 2}px;
    `}

    ${({ matchIndex }) =>
      matchIndex % 2 === 0
        ? css`
            border-top: 2px solid ${lineColor};
            top: ${-1 + teamHeight + teamGap / 2}px;
          `
        : css`
            border-bottom: 2px solid ${lineColor};
            bottom: ${-2 + teamHeight + teamGap / 2}px;
          `};

    ${({ isFinal }) =>
      isFinal &&
      css`
        display: none;
      `}
  }
`;

export const TeamLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => css`
    height: ${theme.spacing.baseX5}px;
    width: ${theme.spacing.baseX5}px;
    background-color: ${theme.colors.surfaceElement.base};
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

export const TeamScore = styled.div<{ winner: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  height: ${teamHeight}px;
  width: ${teamHeight}px;
  ${({ theme, winner }) => css`
    background-color: ${theme.colors.surfaceElement.base};
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
    background-color: ${theme.colors.surfaceElement.base};
  `}
`;

export const Team1 = styled(Team)`
  ${({ theme }) => css`
    ${TeamLogo} {
      border-top-left-radius: ${theme.borderRadius.default};
    }
    ${TeamScore} {
      border-top-right-radius: ${theme.borderRadius.default};
    }
  `}
`;

export const Team2 = styled(Team)`
  ${({ theme }) => css`
    ${TeamLogo} {
      border-bottom-left-radius: ${theme.borderRadius.default};
    }
    ${TeamScore} {
      border-bottom-right-radius: ${theme.borderRadius.default};
    }
  `}
`;
