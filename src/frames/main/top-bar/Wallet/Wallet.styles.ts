import styled, { css } from 'styled-components/macro';
import Icons from 'assets/icons/Icons';

export const Wrapper = styled.div`
  display: flex;
  min-width: 100px;
  overflow: hidden;
  ${({ theme }) => css`
    height: ${theme.spacing.baseX5}px;
    border-radius: ${theme.borderRadius.default};
  `}
`;

export const MoneyContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => css`
    color: ${theme.colors.accent};
    background-color: ${theme.colors.secondary};
    padding: 0 ${theme.spacing.base}px;
    :hover {
      background-color: ${theme.colors.lightTint};
    }
  `}
`;

export const DepositButton = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => css`
    background-color: #32784d; // TODO -> Add to theme
    width: ${theme.spacing.baseX5}px;

    :hover {
      background-color: #45a86b;
    }
  `};
`;

export const DepositIcon = styled(Icons.Plus)`
  ${({ theme }) => css`
    fill: ${theme.colors.accent}; // TODO -> Add to theme
    width: ${theme.spacing.baseX2}px;
    height: ${theme.spacing.baseX2}px;
  `};
`;
