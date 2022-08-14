import styled, { css } from 'styled-components/macro';

export const Wrapper = styled.div<{ iconColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme, iconColor }) => css`
    width: ${theme.spacing.baseX5}px;
    height: ${theme.spacing.baseX5}px;
    padding: ${theme.spacing.base}px;
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.borderRadius.default};
    > *:first-child {
      fill: ${iconColor ? iconColor : theme.colors.textPrimaryLight};
    }
    :hover {
      background-color: ${theme.colors.lightTint};
    }
  `}
`;

export const Hint = styled.div`
  white-space: nowrap;
  ${({ theme }) => css`
    padding: calc(${theme.spacing.base}px / 2);
  `}
`;
