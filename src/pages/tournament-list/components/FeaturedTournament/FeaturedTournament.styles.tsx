import styled, { css } from 'styled-components';

export const Hero = styled.div<{ image: string; visible?: boolean }>`
  ${({ image, theme, visible }) => css`
    position: relative;
    height: 100%;
    background: url(${image});
    background-size: cover;
    text-align: center;
    border-radius: ${theme.borderRadius.default};
    transition: transform 0.3s;
    transform: translateY(-${visible ? 0 : 100}%);
    transform-origin: top;
    :before {
      content: '';
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.3);
    }
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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
