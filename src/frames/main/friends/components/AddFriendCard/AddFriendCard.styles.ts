import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { EllipsisText } from 'common/ui';

export const RequestSentText = styled.div`
  opacity: 0.5;
  ${({ theme }) => css`
    margin-right: ${theme.spacing.base}px;
  `}
`;

export const UserTag = styled(EllipsisText)`
  ${({ theme }) => css`
    margin-left: ${theme.spacing.baseX2}px;
  `}
`;
