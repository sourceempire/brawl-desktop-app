import styled, { css } from 'styled-components';
import { TeamId } from 'types/team/Team';
import { hsla } from 'utils/styledUtils';

export enum CSGOTeamSide {
  T = 'T',
  CT = 'CT'
}

export type CSGORoundResult = {
  winner: TeamId;
  side: CSGOTeamSide;
};

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ScrollContainer = styled.div`
  position: absolute;
  inset: 0;
  overflow: scroll;
  margin-top: 46px;
`;

export const MiddleLine = styled.div<{ height: number }>`
  position: absolute;
  top: 0;
  left: 31px;
  width: 2px;

  ${({ height, theme }) => css`
    background-color: ${theme.colors.lightTint.base};
    height: ${height}px;
  `}
`;

export const RoundWinnerIndicator = styled.div<{ side: CSGOTeamSide; position: 'right' | 'left' }>`
  height: 24px;
  width: 6px;
  margin: 0 auto;

  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.base}px;
  `}

  ${({ side }) =>
    side === CSGOTeamSide.CT &&
    css`
      background-color: orange;
    `}

  ${({ side }) =>
    side === CSGOTeamSide.T &&
    css`
      background-color: lightblue;
    `}

  ${({ position }) =>
    position === 'left' &&
    css`
      transform: translateX(-9px);
    `}

    ${({ position }) =>
    position === 'right' &&
    css`
      transform: translateX(9px);
    `}
`;

export const SideSwapIndicator = styled.div`
  width: 20px;
  height: 2px;
  background-color: red;
  margin: 0 auto;

  margin-bottom: 6px;
  ${({ theme }) => css`
    background-color: ${theme.colors.lightTint.base};
  `}
`;

export const BottomShadow = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 18px;
  ${({ theme }) => css`
    background: linear-gradient(
      ${hsla(theme.colors.secondary.base, 0)},
      ${theme.colors.secondary.base}
    );
  `}
`;
