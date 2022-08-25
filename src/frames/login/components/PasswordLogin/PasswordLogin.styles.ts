import styled from 'styled-components';
import { Button, Input } from 'common/components';

export const Wrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginInput = styled(Input)`
  margin: 6px 0;
`;

export const LoginButton = styled(Button)`
  margin-top: 6px;
  width: 100px;
`;
