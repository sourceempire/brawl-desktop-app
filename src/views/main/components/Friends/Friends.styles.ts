import styled, { css } from 'styled-components/macro';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 230px;
  ${({ theme }) => css`
    height: calc(
      100vh - ${theme.titleBarHeight}px - ${theme.topBarHeight}px - ${theme.spacing.baseX4}px
    );
    background-color: ${theme.colors.secondary};
  `}
`;
