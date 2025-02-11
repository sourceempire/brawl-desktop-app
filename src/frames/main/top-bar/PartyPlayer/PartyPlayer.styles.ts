import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Wrapper = styled.div`
  position: relative;

  ${({ theme }) => css`
    margin-right: ${theme.spacing.baseX2}px;
    height: ${theme.spacing.baseX5}px;
    width: ${theme.spacing.baseX5}px;
    border-radius: 50%;
    :hover {
      outline: 2px solid ${theme.colors.secondary.hover};
    }
    :active {
      outline: 2px solid ${theme.colors.secondary.active};
    }
  `}
`;

export const PlayerImage = styled.img`
  height: 100%;
  width: 100%;
  ${({ theme }) => css`
    border-radius: 50%;
    background-color: ${theme.colors.secondary.base};
  `}
`;

export const PlayerAction = styled.div`
  ${({ theme }) => css`
    margin-left: -${theme.spacing.base}px;
    margin-right: -${theme.spacing.base}px;
    border-radius: ${theme.borderRadius.default};
    padding: calc(${theme.spacing.base}px) ${theme.spacing.base}px;
    :hover {
      background-color: ${theme.colors.secondary.hover};
    }
  `}
`;

export const MenuWrapper = styled.div`
  width: 150px;
`;
