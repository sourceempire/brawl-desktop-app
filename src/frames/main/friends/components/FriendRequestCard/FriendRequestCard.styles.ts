import styled, { css } from 'styled-components';
import ActionButton from 'common/components/ActionButton';

export const RequestActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${({ theme }) => css`
    grid-gap: ${theme.spacing.base}px;
  `}
`;

export const RequestAction = styled(ActionButton)`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightTint.base};
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
