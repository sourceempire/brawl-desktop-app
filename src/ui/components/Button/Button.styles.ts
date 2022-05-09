import styled, { css } from 'styled-components';
import { lightenColor } from 'ui/utils/colorBrightness';

type Props = {
  primary?: boolean;
  accent?: boolean;
};

// TODO -> Add focused style
// TODO -> Add support for icons
// TODO -> Add support for which side icons should be

export const Wrapper = styled.button<Props>`
  width: 100%;
  border: none;
  color: white;
  height: 30px;
  padding: 0 15px;
  cursor: pointer;
  font-size: 13px;

  ${({ theme, primary, accent }) => css`
    border-radius: ${theme.borderRadius.default};
    background-color: ${theme.colors.lightTint};
    :hover {
      background-color: ${lightenColor(theme.colors.lightTint, 25)};
    }
    :active {
      background-color: ${theme.colors.lightTint};
    }

    ${accent &&
    css`
      background-color: ${theme.colors.accent};
      color: rgba(0, 0, 0, 87);
      :hover {
        background-color: ${lightenColor(theme.colors.accent, 25)};
      }
      :active {
        background-color: ${theme.colors.accent};
      }
    `}

    ${primary &&
    css`
      background-color: ${theme.colors.primary};
      :hover {
        color: rgba(0, 0, 0, 87);
        background-color: ${lightenColor(theme.colors.primary, 25)};
      }
      :active {
        color: white;
        background-color: ${theme.colors.primary};
      }
    `}
  `}
`;
