import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Icons } from '@sourceempire/brawl-ui';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  font-size: 14px;
`;

export const Check = styled(Icons.Check)`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimaryDark};
  `}
`;

export const Box = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  height: 18px;
  width: 18px;
  margin-right: 6px;
  outline-color: transparent;

  ${({ theme, checked }) => css`
    background-color: ${checked ? theme.colors.accent.base : 'trasnparent'};
    border: 2px solid ${theme.colors.accent.base};
    border-radius: ${theme.borderRadius.default};

    :hover {
      border: 2px solid ${theme.colors.accent.hover};
      background-color: ${checked ? theme.colors.accent.hover : 'trasnparent'};
    }

    :focus-visible {
      outline: 2px solid white;
      outline-offset: 2px;
      transition: outline-color 0.3s;
    }
  `}
`;

export const Checks = styled.div`
  height: 100%;
  width: 100%;

  ${({ theme }) => css`
    background-color: ${theme.colors.accent.base};
  `}
`;

export const Label = styled.div``;
