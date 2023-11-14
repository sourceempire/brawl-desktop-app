import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  ${({ theme }) => css`
    padding: ${theme.spacing.base * 10}px ${theme.spacing.baseX3}px 0;
  `}
`;

export const Content = styled.div`
  position: relative;
`;

export const Score = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 200px 1fr;
`;

export const TeamScore = styled.div<{ isWinner: boolean }>`
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
  grid-template-columns: 46% auto 46%;
`;
