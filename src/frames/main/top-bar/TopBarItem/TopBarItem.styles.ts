import styled, { css } from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    width: ${theme.spacing.baseX5}px;
    height: ${theme.spacing.baseX5}px;
    padding: ${theme.spacing.base}px;
    margin-right: ${theme.spacing.baseX3}px;
    background-color: ${theme.colors.secondary.base};
    border-radius: ${theme.borderRadius.default};
    > *:first-child {
      fill: ${theme.colors.textPrimaryLight};
    }
    :hover {
      background-color: ${theme.colors.secondary.hover};
    }
  `}
`;

export const Hint = styled.div`
  ${({ theme }) => css`
    padding: calc(${theme.spacing.base}px / 2);
  `}
`;
