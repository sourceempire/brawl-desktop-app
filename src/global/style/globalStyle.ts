import { createGlobalStyle } from 'styled-components';
import ResetStyle from './ResetStyle';

const GlobalStyle = createGlobalStyle`
  ${ResetStyle}
  body {
    border: ${process.platform == 'win32' ? '1px solid rgba(200, 200, 200, 0.1)' : 'none'};
    font-family: 'DM Sans';
    color: white;
  }
`;

export default GlobalStyle;
