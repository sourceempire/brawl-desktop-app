import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { hsla } from 'utils/styledUtils';
import { Image } from '@sourceempire/brawl-ui';

export const ScoreMiddleSection = styled.div`
  font-size: 20px;
`;

type BackgroundProps = {
  disableFade?: boolean;
};

const fadeInKeyframes = keyframes`
  from {
    opacity: 0;
    background-position: 0 -200px;
  } to {
    opacity: 1;
    background-position: 0 -230px;
  }
`;

export const BackgroundImage = styled(Image)<BackgroundProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 0;
  object-fit: cover;
  filter: grayscale(1);
  ${({ disableFade }) => css`
    ${!disableFade &&
    css`
      animation: ${fadeInKeyframes} 0.6s forwards;
    `}
  `}
`;

export const BackgroundImageDefault = styled.img<BackgroundProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 0;
  object-fit: cover;
  filter: grayscale(1);
  ${({ disableFade }) => css`
    ${!disableFade &&
    css`
      animation: ${fadeInKeyframes} 0.6s forwards;
    `}
  `}
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  ${({ theme }) => css`
    background-image: linear-gradient(
      ${hsla(theme.colors.secondary.base, 0.8)},
      ${theme.colors.secondary.base} 80%
    );
  `}
`;
