import styled from 'styled-components';
import { Button, Input } from 'ui';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 100px 24px;
  padding-top: ${(props) => props.theme.titleBarHeight};
`;

export const Version = styled.p`
  position: absolute;
  bottom: 12px;
  left: 0;
  right: 0;
  width: 100%;
  font-size: 10px;
  opacity: 0.3;
  font-weight: 100;
  text-align: center;
`;

export const LoginInput = styled(Input)`
  margin: 18px 0;
`;

export const LoginButton = styled(Button)`
  margin-top: 6px;
`;
