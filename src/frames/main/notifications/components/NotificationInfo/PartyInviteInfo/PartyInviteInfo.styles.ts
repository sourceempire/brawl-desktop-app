import styled, { css } from 'styled-components';
import { Button } from 'common/components';

export const Actions = styled.div`
  display: flex;
  grid-column: 1 / 3;
  ${({ theme }) => css`
    margin-top: ${theme.spacing.baseX2}px;
  `}
`;

export const ActionButton = styled(Button)`
  ${({ theme }) => css`
    margin-right: ${theme.spacing.baseX2}px;
  `}
`;
