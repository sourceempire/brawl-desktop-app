import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { teamGap, teamHeight } from '../BracketMatch/BracketMatch.styles';
import { theme } from 'assets/styles/Theme';

export const firstRoundMatchGap = 48;

export const Round = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  gap: 24px;
  :last-of-type {
    padding-right: 70px;
  }
`;

export const RoundHeader = styled.div`
  position: sticky;
  top: ${theme.spacing.baseX2}px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const RoundName = styled.div<{ active: boolean }>`
  flex-grow: 0;
  flex-shrink: 1;
  ${({ theme, active }) => css`
    padding: ${theme.spacing.base}px ${theme.spacing.baseX3}px;
    border-radius: ${theme.borderRadius.default};
    background-color: ${active ? theme.colors.accent.base : theme.colors.surface.base};
    color: ${active ? theme.colors.textPrimaryDark : theme.colors.textPrimaryLight};
  `}
`;

export const Matches = styled.div<{ matchCount: number; roundIndex: number }>`
  display: grid;
  align-items: center;

  ${({ matchCount, roundIndex }) => css`
    grid-template-rows: repeat(
      ${matchCount},
      ${Math.pow(2, roundIndex) * (teamHeight * 2 + teamGap + firstRoundMatchGap)}px
    );
  `}
`;
