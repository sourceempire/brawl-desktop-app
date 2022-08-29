import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  white-space: nowrap;
  ${({ theme }) => css`
    padding: calc(${theme.spacing.base}px / 2);
  `}
`;
