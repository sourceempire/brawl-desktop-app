import { Image } from '@sourceempire/brawl-image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Card } from 'common/ui';
import { Icons } from '@sourceempire/brawl-ui';

export const TournamentImage = styled(Image)`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Header = styled.div`
  position: relative;
  background-size: cover;
  height: 90px;
`;

export const Wrapper = styled(Card)`
  width: 100%;
  height: 214px;
  border-radius: var(--border-radius-default);
  overflow: hidden;
  :hover {
    background-color: ${({ theme }) => theme.colors.surfaceElement.base};
  }
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
  ${({ theme }) => css`
    padding: ${theme.spacing.baseX2}px;
  `}
  ${({ theme }) => theme.textStyles.body}
  line-height: 1.6em;
`;

export const GameMode = styled.div`
  font-weight: bold;
`;

export const GameModeIcon = styled(Icons.Sword)`
  height: 14px;
  width: 14px;
  color: #94ace8;
  margin: 0px 6px 0px 0px;
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
  text-align: center;
`;
export const Column3 = styled.div`
  text-align: right;
`;

export const TournamentName = styled.div`
  height: 100%;
  width: 100%;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  position: absolute;
`;

export const PrizePoolHeader = styled.div`
  color: ${({ theme }) => theme.colors.textSecondaryLight};
`;

export const PrizePool = styled.div`
  font-weight: bold;
`;

export const PrizePoolIcon = styled(Icons.Trophy)`
  height: 14px;
  width: 14px;
  margin: 0px 6px 0px 0px;
  color: ${({ theme }) => theme.colors.primary.base};
`;

export const StatusIconLocked = styled(Icons.Lock)`
  height: 14px;
  width: 14px;
  color: ${({ theme }) => theme.colors.textPrimaryLight};
  margin: 0px 6px 0px 0px;
`;

export const StatusIconOpen = styled(Icons.Unlock)`
  height: 14px;
  width: 14px;
  color: ${({ theme }) => theme.colors.textPrimaryLight};
  margin: 0px 6px 0px 0px;
`;

export const StatusText = styled.div`
  font-weight: bold;
`;

export const TournamentStatus = styled.div`
  display: flex;
  align-items: center;
`;

export const EntryFee = styled.div`
  font-weight: bold;
`;

export const EntryFeeIcon = styled(Icons.Ticket)`
  height: 14px;
  width: 14px;
  margin: 0px 6px 0px 0px;
  color: ${({ theme }) => theme.colors.accent.base};
`;

export const StartTime = styled.div`
  color: ${({ theme }) => theme.colors.textSecondaryLight};
`;

export const TwoColHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
