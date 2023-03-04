import styled, { css } from 'styled-components';

export const Buttons = styled.div`
  display: flex;
  ${({ theme }) => css`
    column-gap: ${theme.spacing.baseX2}px;
  `}
`;

export const BraketsButton = styled.button;
