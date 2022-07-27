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
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-sizing: border-box;
  height: 9px;
  width: 9px;

  ${({ status }) => css`
    ${StatusStyle[status]};
  `}
`;

export const StatusIcon = styled.img`
  width: 70%;
`;
