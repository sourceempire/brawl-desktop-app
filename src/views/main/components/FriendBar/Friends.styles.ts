import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.baseX2}px;
  `}
`;

export const FriendList = styled.div`
  display: grid;
  ${({ theme }) => css`
    grid-gap: ${theme.spacing.base}px;
    margin-bottom: ${theme.spacing.baseX3}px;
  `}
`;
