import { Image } from 'brawl-image';
import styled, { css } from 'styled-components';
import { hsla } from 'utils/styledUtils';

export const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
`;

export const Gradient = styled.div`
  position: absolute;
  inset: 0;
  ${({ theme }) => css`
    background-image: linear-gradient(
      ${hsla(theme.colors.background.base, 0.8)},
      ${theme.colors.background.base} 50%
    );
  `}
`;

export const BackgroundImage = styled(Image)`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  filter: grayscale(1);
`;
