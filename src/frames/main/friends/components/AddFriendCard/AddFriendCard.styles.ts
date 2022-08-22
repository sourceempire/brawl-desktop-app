import styled, { css } from 'styled-components/macro';
import Icons from 'assets/icons/Icons';

export const RequestSentText = styled.div`
  opacity: 0.5;
  ${({ theme }) => css`
    margin-right: ${theme.spacing.base}px;
  `}
`;

export const RemoveRequestIcon = styled(Icons.RemoveFriend)`
  padding: 1px;
`;
