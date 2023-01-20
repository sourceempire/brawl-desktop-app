import styled, { css } from 'styled-components/macro';
import EllipsisText from 'common/components/EllipsisText';
import { Icons } from 'common/components/Icon';

export const RequestSentText = styled.div`
  opacity: 0.5;
  ${({ theme }) => css`
    margin-right: ${theme.spacing.base}px;
  `}
`;

export const RemoveRequestIcon = styled(Icons.RemoveFriend)`
  padding: 1px;
`;

export const UserTag = styled(EllipsisText)`
  ${({ theme }) => css`
    margin-left: ${theme.spacing.baseX2}px;
  `}
`;
