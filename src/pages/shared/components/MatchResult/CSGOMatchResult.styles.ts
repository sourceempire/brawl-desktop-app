import styled, { css } from 'styled-components';
import { TeamId } from 'types/team/Team';

export const Score = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 200px 1fr;
`;

export const MapName = styled.div`
  font-size: 20px;
`;

export const MapScore = styled.div<{ isWinner: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 40px;
  ${({ isWinner, theme }) =>
    isWinner &&
    css`
      ::after {
        content: 'WINNER';
        position: absolute;
        bottom: 0;
        font-size: 20px;
        transform: translateY(100%);
        color: ${theme.colors.accent.base};
      }
    `}
`;

export const TeamTables = styled.div`
  padding-top: 50px;
  display: grid;
  justify-items: center;
  grid-template-columns: 47% auto 47%;
`;
