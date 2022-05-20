import styled from 'styled-components';
import { theme } from 'assets/styles/Theme';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  padding-top: ${(props) => props.theme.titleBarHeight};
`;

export const Version = styled.p`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 12px;
  width: 100%;
  font-size: 10px;
  opacity: 0.3;
  font-weight: 100;
  text-align: center;
`;

export const AsideWrapper = styled.div`
  width: 50%;
  position: relative;
  top: -24px;
  height: calc(100% + ${theme.titleBarHeight});
`;

export const AsideImage = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const LoginWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  padding: 75px;
  padding-top: 100px;
`;
