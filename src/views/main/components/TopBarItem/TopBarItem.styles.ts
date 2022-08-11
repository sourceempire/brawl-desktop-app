import styled, { css } from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > *:first-child {
    fill: #dadada;
  }

  ${({ theme }) => css`
    width: ${theme.spacing.baseX5};
    height: ${theme.spacing.baseX5};
    padding: ${theme.spacing.base};
    margin-right: ${theme.spacing.baseX3};
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.borderRadius.default};

    :hover {
      background-color: ${theme.colors.lightTint};
    }
  `}
`;
