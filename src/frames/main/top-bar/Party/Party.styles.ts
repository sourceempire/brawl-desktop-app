import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Wrapper = styled.div`
  display: flex;
`;

export const PartyPlayer = styled.img`
  ${({ theme }) => css`
    margin-right: ${theme.spacing.baseX2}px;
    height: ${theme.spacing.baseX5}px;
    width: ${theme.spacing.baseX5}px;
    border-radius: ${theme.borderRadius.default};
  `}
`;
