import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const OuterWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 1;
  height: 100%;
`;

export const InnerWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${({ theme }) => css`
    padding-right: ${theme.spacing.base}px;
  `}
`;
