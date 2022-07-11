import styled, { css } from 'styled-components';
import { darkenColor, lightenColor } from 'assets/styles/colorBrightness';

type Props = {
  primary?: boolean;
  accent?: boolean;
  hasIcon: boolean;
};

// TODO -> Add focused style
// TODO -> Add support for icons
// TODO -> Add support for which side icons should be

export const iconStyle = css`
  svg,
  img {
    display: inline-block;
    height: 100%;
    padding: 8px 10px 8px 15px;
  }
`;

export const Wrapper = styled.button<Props>`
  width: auto;
  border: none;
  color: white;
  height: 30px;
  padding: 0 0;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  outline-color: transparent;
  ${(props) => props.theme.textStyles.button}

  :focus-visible {
    outline: 2px solid white;
    outline-offset: 2px;
    transition: outline-color 0.3s;
  }

  ${iconStyle}

  ${({ theme, primary, accent, hasIcon }) => css`
    border-radius: ${theme.borderRadius.default};
    background-color: ${theme.colors.lightTint};
    :hover {
      background-color: ${lightenColor(theme.colors.lightTint, 25)};
    }
    :active {
      background-color: ${lightenColor(theme.colors.lightTint, 50)};
    }

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
        background-color: ${darkenColor(theme.colors.accent, 25)};
      }
    `}

    ${primary &&
    css`
      background-color: ${theme.colors.primary};
      :hover {
        background-color: ${lightenColor(theme.colors.primary, 25)};
      }
      :active {
        background-color: ${darkenColor(theme.colors.primary, 10)};
      }
    `}
  `}
`;
