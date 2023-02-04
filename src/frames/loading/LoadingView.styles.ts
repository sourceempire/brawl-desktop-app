import styled from 'styled-components';
import { Animation } from 'common/components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100%;
`;

export const LoadingStatusText = styled.p`
  color: white;
  text-align: center;
  width: 100%;
  padding: 5px;
  font-size: 18px;
  height: 35px;
`;

export const LoadingAnimation = styled(Animation)`
  height: 200px;
  width: 200px;
`;
