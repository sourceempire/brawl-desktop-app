import styled, { css } from 'styled-components';
import { CSGOTeamSide } from 'types/match/Match';

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const ScrollContainer = styled.div`
  position: absolute;
  margin-top: 46px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 6px;
  inset: 0;
  overflow: scroll;
`;

export const RoundNumber = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  opacity: 0.4;
`;

export const RoundWinner = styled.div<{ side: CSGOTeamSide; position: 'right' | 'left' }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 55px;
  height: 30px;
  flex-shrink: 0;

  ${({ theme }) => css`
    border-radius: ${theme.borderRadius.default};
  `}

  :before {
    content: '';
    position: absolute;
    width: 4px;
    height: 100%;
  }

  svg {
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.5));
  }

  ${({ side }) =>
    side === CSGOTeamSide.CT &&
    css`
      svg {
        fill: #3caccf;
      }
      :before {
        background-color: #3caccf;
      }
    `}

  ${({ side }) =>
    side === CSGOTeamSide.T &&
    css`
      svg {
        fill: #f8b847;
      }
      :before {
        background-color: orange;
      }
    `}

  ${({ position, side }) =>
    position === 'left' &&
    css`
      background-image: ${side === CSGOTeamSide.CT
        ? 'linear-gradient(90deg, #3cacca55, #3caccf00 90%)'
        : 'linear-gradient(90deg, #f8b84755, #f8b84700 90%)'};

      :before {
        left: 0;
      }

      ${RoundNumber} {
        right: 0px;
      }
    `}

    ${({ position, side }) =>
    position === 'right' &&
    css`
      background-image: ${side === CSGOTeamSide.CT
        ? 'linear-gradient(-90deg, #3cacca55, #3caccf00 90%)'
        : 'linear-gradient(-90deg, #f8b84755, #f8b84700 90%)'};
      :before {
        right: 0;
      }
      ${RoundNumber} {
        left: 0;
      }
    `}
`;

export const SideSwapIndicator = styled.div`
  background-color: red;
  margin: 0 auto;
  margin-bottom: 12px;
`;
