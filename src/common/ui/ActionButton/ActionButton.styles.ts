import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ActionButtonSize, WrapperProps } from './ActionButton.types';
import { theme } from 'assets/styles/Theme';

const buttonSize = {
  [ActionButtonSize.SMALL]: '20px',
  [ActionButtonSize.MEDIUM]: theme.spacing.baseX5 + 'px',
  [ActionButtonSize.LARGE]: theme.spacing.baseX6 + 'px'
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme, iconColor, isCircle, size, active, disabled }) => css`
    width: ${buttonSize[size]};
    height: ${buttonSize[size]};
    padding: ${size === ActionButtonSize.SMALL ? `5px` : `${theme.spacing.base}px`};
    background-color: ${theme.colors.secondary.base};
    border-radius: ${isCircle ? '50%' : theme.borderRadius.default};
    > *:first-child {
      fill: ${iconColor ? iconColor : theme.colors.textPrimaryLight};
    }
    :hover {
      background-color: ${theme.colors.secondary.hover};
    }
    :active {
      background-color: ${theme.colors.secondary.active};
    }

    ${active &&
    css`
      background-color: ${theme.colors.accent.base};
      color: ${theme.colors.textPrimaryDark};
      fill: ${theme.colors.textPrimaryDark};

      :hover {
        background-color: ${theme.colors.accent.base};
        color: ${theme.colors.textPrimaryDark};
        fill: ${theme.colors.textPrimaryDark};
      }
    `}

    ${disabled &&
    css`
      pointer-events: none;
      opacity: 0.2;
    `}
  `}
`;
