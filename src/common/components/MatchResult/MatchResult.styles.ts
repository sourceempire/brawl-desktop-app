import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { hsla } from 'utils/styledUtils';

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  ${({ theme }) => css`
    padding: ${theme.spacing.base * 10}px ${theme.spacing.baseX3}px 0;
  `}
`;

type BackdropProps = {
  mapImageUrl: string;
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

export const Backdrop = styled.div<BackdropProps>`
  position: absolute;
  z-index: 0;
  content: '';
  inset: 0;
  background-position: 0 -230px;
  ${({ theme, mapImageUrl, disableFade }) => css`
    background-image: url(${mapImageUrl});
    background-size: cover;

    ${!disableFade &&
    css`
      animation: ${fadeInKeyframes} 0.6s forwards;
    `}

    :before {
      content: '';
      position: absolute;
      inset: 0;
      backdrop-filter: grayscale(1);
      background-image: linear-gradient(
        ${hsla(theme.colors.secondary.base, 0.8)},
        ${theme.colors.secondary.base} 80%
      );
    }
  `}
`;

export const Content = styled.div`
  position: relative;
`;
