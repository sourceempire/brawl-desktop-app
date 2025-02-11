import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { lightenColor } from 'assets/styles/colorBrightness';

type Props = {
  primary?: boolean;
  accent?: boolean;
  alert?: boolean;
  hasIcon: boolean;
  small?: boolean;
};

// TODO -> Add focused style
// TODO -> Add support for icons
// TODO -> Add support for which side icons should be

export const Wrapper = styled.button<Props>`
  display: inline-flex;
  width: auto;
  border: none;
  color: white;
  padding: 0 0;
  align-items: center;
  justify-content: center;
  outline-color: transparent;

  ${({ theme }) => css`
    font: ${theme.textStyles.button};
  `}

  :focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.accent.base};
    outline-offset: 2px;
    transition: outline-color 0.3s;
  }

  ${({ theme, primary, accent, alert, hasIcon, small }) => css`
    border-radius: ${theme.borderRadius.default};
    background-color: ${theme.colors.secondary.base};
    :hover {
      background-color: ${theme.colors.secondary.hover};
    }
    :active {
      background-color: ${theme.colors.secondary.active};
    }

    height: ${small ? 24 : 30}px;

    ${hasIcon &&
    css`
      padding: 0 15px 0 0;
    `}
    ${!hasIcon &&
    css`
      padding: 0 15px;
    `}

    ${accent &&
    css`
      background-color: ${theme.colors.accent.base};
      color: rgba(0, 0, 0, 87);
      :hover {
        background-color: ${theme.colors.accent.hover};
      }
      :active {
        background-color: ${theme.colors.accent.active};
      }
    `}

    ${primary &&
    css`
      background-color: ${theme.colors.primary.base};
      :hover {
        background-color: ${theme.colors.primary.hover};
      }
      :active {
        background-color: ${theme.colors.primary.active};
      }
    `}

    ${alert &&
    css`
      background-color: ${theme.colors.statusError};
      :hover {
        background-color: ${lightenColor(theme.colors.statusError, 25)};
      }
      :active {
        background-color: ${lightenColor(theme.colors.statusError, 50)};
      }
    `}
  `}
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 7px 9px 7px 12px;
  box-sizing: border-box;
`;
