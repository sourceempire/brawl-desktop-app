import { Button as Btn } from 'common/ui-components';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ active: boolean }>`
  transition: opacity 1s;
  width: 50%;
  opacity: 0;

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
    `}
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled(Btn)`
  width: 100px;
`;
