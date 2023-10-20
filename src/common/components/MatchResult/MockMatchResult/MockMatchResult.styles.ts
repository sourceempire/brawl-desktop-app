import styled from '@emotion/styled';
import { Image } from 'brawl-image';
import { css } from '@emotion/react';
import { hsla } from 'utils/styledUtils';

export const ScoreMiddleSection = styled.div`
  font-size: 20px;
`;

export const BackgroundImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 0;
  object-fit: cover;
  filter: grayscale(1);
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
