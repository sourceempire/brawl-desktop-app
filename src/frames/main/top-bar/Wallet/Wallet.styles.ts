import styled, { css } from 'styled-components/macro';
import { Icons } from 'common/components/Icon';

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
    color: ${theme.colors.accent.base};
    background-color: ${theme.colors.secondary.base};
    padding: 0 ${theme.spacing.base}px;
    :hover {
      background-color: ${theme.colors.secondary.hover};
    }
    :active {
      background-color: ${theme.colors.secondary.active};
    }
  `}
`;

export const DepositIcon = styled(Icons.Plus)`
  ${({ theme }) => css`
    fill: ${theme.colors.accent.base};
    width: ${theme.spacing.baseX2}px;
    height: ${theme.spacing.baseX2}px;
  `};
`;

export const DepositButton = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => css`
    background-color: ${theme.colors.depositGreen.base};
    width: ${theme.spacing.baseX5}px;

    :hover {
      background-color: ${theme.colors.depositGreen.hover};
      ${DepositIcon} {
        fill: ${theme.colors.accent.hover};
      }
    }
    :active {
      background-color: ${theme.colors.depositGreen.active};
      ${DepositIcon} {
        fill: ${theme.colors.accent.active};
      }
    }
  `};
`;
