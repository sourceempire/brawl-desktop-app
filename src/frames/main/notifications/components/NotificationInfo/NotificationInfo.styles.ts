import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Button } from 'common/ui';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  flex-grow: 1;
`;

export const Info = styled.div`
  flex-grow: 1;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-column: 1 / 3;
  ${({ theme }) => css`
    margin-right: -${theme.spacing.base * 2.5}px;
    margin-top: ${theme.spacing.base}px;
  `}
`;

export const ActionButton = styled(Button)`
  ${({ theme, primary, accent }) => css`
    margin-left: ${theme.spacing.baseX2}px;
    ${!primary &&
    !accent &&
    css`
      background-color: transparent;
    `}
  `}
`;
