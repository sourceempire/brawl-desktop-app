import styled, { css } from 'styled-components';
import { Card } from 'common/ui';
import heroBackground from 'assets/images/hero-background.png';
import heroForeground from 'assets/images/hero-foreground.png';

export const Wrapper = styled(Card).attrs({ padding: false })`
  grid-column: span 2;
  position: relateive;

  @media (max-width: 1040px) {
    grid-column: span 1;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    ${theme.textStyles.stylizedHeader}

    position: absolute;
    top: 72px;
    left: 60px;
    right: 250px;
  `}
`;

export const HeroBackground = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 80%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position-x: right;
  background-position-y: bottom;
  background-image: url(${heroBackground});
`;

export const HeroForeground = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 120%;
  background-repeat: no-repeat;
  width: 217px;
  margin-right: 12%;
  background-position-x: right;
  background-position-y: bottom;
  background-size: 100%;
  background-image: url(${heroForeground});
`;
