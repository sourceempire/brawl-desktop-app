import styled from 'styled-components';
import { theme } from 'assets/styles/Theme';

export const AsideWrapper = styled.div`
  width: 50%;
  position: absolute;
  left: 0;
  top: 0;
  transform: translateX(100%);
  transition: transform 1s;
  height: calc(100% + ${theme.titleBarHeight});
`;

export const AsideImage = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
