import { Global, css } from '@emotion/react';

import { getPlatform } from 'utils/processUtils';
import ResetStyle from './ResetStyle';
import { theme } from './Theme';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${ResetStyle}
        body {
          border: ${getPlatform() == 'win32' ? '1px solid rgba(200, 200, 200, 0.1)' : 'none'};
          font-family: 'DM Sans';
          color: white;
          background-color: ${theme.colors.background.base};
          font: ${theme.textStyles.body};
        }
        input,
        button {
          font-family: 'DM Sans';
        }
        a {
          color: ${theme.colors.accent.base};
          text-decoration: none;
          cursor: default;
        }
      `}
    />
  );
};

export default GlobalStyle;
