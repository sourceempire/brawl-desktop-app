import styled, { css } from 'styled-components';
import { Props, StatusStyle } from './UserStatus.types';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StatusText = styled.div`
  margin-left: 6px;
  text-transform: capitalize;
`;

export const StatusCircle = styled.div<Props>`
  border-radius: 50%;
  box-sizing: border-box;

  ${({ size, status }) => css`
    height: ${size ?? 9}px;
    width: ${size ?? 9}px;
    ${StatusStyle[status]};
  `}
`;
