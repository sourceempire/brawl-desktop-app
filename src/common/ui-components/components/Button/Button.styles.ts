import styled, { css } from 'styled-components';
import { darkenColor, lightenColor } from 'assets/styles/colorBrightness';

type Props = {
  primary?: boolean;
  accent?: boolean;
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
  cursor: pointer;
  outline-color: transparent;
  ${({ theme }) => theme.textStyles.button}

  .button-icon {
    display: inline-block;
    height: 100%;
    width: 100%;
    padding: 8px 10px 8px 15px;
  }

  :focus-visible {
    outline: 2px solid white;
    outline-offset: 2px;
    transition: outline-color 0.3s;
  }

  .button-icon {
    display: inline-block;
    height: 100%;
    padding: 8px 10px 8px 15px;
    box-sizing: border-box;
  }

  ${({ theme, primary, accent, hasIcon, small }) => css`
    border-radius: ${theme.borderRadius.default};
    background-color: ${theme.colors.lightTint};
    :hover {
      background-color: ${lightenColor(theme.colors.lightTint, 25)};
    }
    :active {
      background-color: ${lightenColor(theme.colors.lightTint, 50)};
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
      background-color: ${theme.colors.accent};
      color: rgba(0, 0, 0, 87);
      :hover {
        background-color: ${lightenColor(theme.colors.accent, 25)};
      }
      :active {
        background-color: ${lightenColor(theme.colors.accent, 50)};
      }
    `}

    ${primary &&
    css`
      background-color: ${theme.colors.primary};
      :hover {
        background-color: ${lightenColor(theme.colors.primary, 25)};
      }
      :active {
        background-color: ${lightenColor(theme.colors.primary, 50)};
      }
    `}
  `}
`;
