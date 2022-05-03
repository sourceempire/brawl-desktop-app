import styled from 'styled-components';
import { Props } from './ProgressBar';

export const Wrapper = styled.div`
  height: 24px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  overflow: hidden;
  border-radius: ${(props) => props.theme.borderRadius.default};
`;

export const Progression = styled.div<Pick<Props, 'percent'>>`
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  transform: translateX(calc(-100% + ${(props) => `${props.percent}%`}));
  transition: transform 0.2s;
  border-radius: ${(props) => props.theme.borderRadius.default};
`;
