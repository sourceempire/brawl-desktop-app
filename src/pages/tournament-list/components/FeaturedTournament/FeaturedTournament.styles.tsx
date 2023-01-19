import styled, { css } from 'styled-components';

export const Hero = styled.div<{ visible: boolean; image: string }>`
  ${({ visible, image, theme }) => css`
    position: relative;
    height: 166px;
    transition: transform 0.3s;
    transform: translateY(-${visible ? 0 : 100}%);
    transform-origin: top;
    background: url(${image});
    background-size: cover;
    text-align: center;
    border-radius: ${theme.borderRadius.default};
    position: relative;
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
  :hover {
    ${Hero} {
      :before {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }
`;

export const VisibilityToggle = styled.div`
  ${(props) => props.theme.textStyles.menu}
  margin: 18px 0;
  display: inline-block;

  &:after {
    content: '▾';
    margin-left: 6px;
  }
`;

export const HeroWrapper = styled.div`
  overflow: hidden;
`;

export const Info = styled.div`
  width: 100%;
  position: absolute;
  bottom: 18px;
  padding: 0px 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Countdown = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.35);
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  top: 18px;
  left: 18px;
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
