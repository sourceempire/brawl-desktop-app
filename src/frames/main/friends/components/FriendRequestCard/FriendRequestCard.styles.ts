import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ActionButton } from 'common/ui';

export const RequestActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${({ theme }) => css`
    grid-gap: ${theme.spacing.base}px;
  `}
`;

export const RequestAction = styled(ActionButton)`
  ${({ theme }) => css`
    background-color: ${theme.colors.surface.base};
  `}
`;

export const AcceptAction = styled(RequestAction)`
  ${({ theme }) => css`
    :hover {
      background-color: ${theme.colors.statusSuccess};
    }
  `}
`;

export const DeclineAction = styled(RequestAction)`
  ${({ theme }) => css`
    :hover {
      background-color: ${theme.colors.statusError};
    }
  `}
`;
