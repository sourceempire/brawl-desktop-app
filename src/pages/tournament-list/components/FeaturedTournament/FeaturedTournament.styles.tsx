import { Image } from '@sourceempire/brawl-ui';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const TournamentImage = styled(Image)`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  left: 0;
  top: 0;
`;

export const Hero = styled.div<{ visible?: boolean }>`
  position: relative;
  height: 100%;
  background-size: cover;
  text-align: center;
  transform-origin: top;
  transition: transform 0.3s;

  ${({ theme, visible }) => css`
    border-radius: ${theme.borderRadius.default};
    transform: translateY(-${visible ? 0 : 100}%);
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  :hover {
    filter: brightness(1.2);
  }
`;

export const HeroWrapper = styled.div`
  height: 100%;
  overflow: hidden;
`;

export const Info = styled.div`
  width: 100%;
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.baseX8}px;
  padding: 0px 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Countdown = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.35);
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  top: ${({ theme }) => theme.spacing.baseX8}px;
  left: 56px;
  font-size: 14px;
  text-transform: uppercase;
`;

export const Column1 = styled.div`
  text-align: left;
`;
export const Column2 = styled.div`
  text-align: right;
`;

export const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.stylized};
`;

export const TournamentInfo = styled.div``;

export const PrizePoolAmount = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const PrizePool = styled.div`
  text-transform: uppercase;
`;

export const Title = styled.div`
  font-weight: bold;
  margin-bottom: 2px;
`;

export const Subtitle = styled.div`
  color: ${({ theme }) => theme.colors.textSecondaryLight};
`;
