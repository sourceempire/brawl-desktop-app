import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

type HeroProps = {
  image: string;
};

export const Hero = styled.div<HeroProps>`
  height: 166px;
  width: 100%;
  background-size: cover;
  ${({ theme, image }) => css`
    background-image: url(${image});
    border-radius: ${theme.borderRadius.default};
  `}
`;
