import styled, { css } from 'styled-components/macro';
import { teamGap, teamHeight } from '../BracketMatch/BracketMatch.styles';

export const firstRoundMatchGap = 48;

export const Round = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 24px;
`;

export const RoundName = styled.div<{ active: boolean }>`
  background-color: red;
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
