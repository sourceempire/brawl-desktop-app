import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => css`
    padding: ${theme.spacing.baseX4}px 0 0;
  `};
`;
