import styled, { css } from 'styled-components/macro';
import { Card } from 'common/components';

export const Wrapper = styled(Card)`
  width: 100%;
  height: 214px;
`;

export const Header = styled.div<{ image: string }>`
  ${({ image, theme }) => css`
    background-image: url(${image});
    background-size: cover;
    height: 90px;
    border-radius: ${theme.borderRadius.default} ${theme.borderRadius.default} 0 0;
  `}
`;

export const Line = styled.div`
  background-color: ${({ theme }) => theme.colors.accent.base};
  height: 6px;
`;

export const Countdown = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.35);
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  top: 6px;
  left: 6px;
  font-size: 14px;
  text-transform: uppercase;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 6px;
  ${({ theme }) => theme.textStyles.body}
  line-height: 1.6em;
`;

export const Row1 = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: auto;
  justify-content: space-between;
`;

export const Row2 = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Column1 = styled.div``;
export const Column2 = styled.div`
  text-align: right;
`;

export const Game = styled.div``;
export const Name = styled.div`
  font-weight: bold;
`;

export const PrizePoolHeader = styled.div`
  text-transform: uppercase;
`;

export const PrizePool = styled.div`
  color: ${({ theme }) => theme.colors.statusSuccess};
`;

export const EntryFee = styled.div``;
export const Time = styled.div``;
export const Region = styled.div``;
export const NumberOfTeams = styled.div``;
