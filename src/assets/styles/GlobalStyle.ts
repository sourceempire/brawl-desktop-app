import { createGlobalStyle } from 'styled-components';
import { getPlatform } from 'utils/processUtils';
import ResetStyle from './ResetStyle';

const GlobalStyle = createGlobalStyle`
  ${ResetStyle}
  body {
    border: ${getPlatform() == 'win32' ? '1px solid rgba(200, 200, 200, 0.1)' : 'none'};
    font-family: 'DM Sans';
    color: white;
    background-color: ${(props) => props.theme.colors.background};
    ${(props) => props.theme.textStyles.body};
  }
  input, button {
    font-family: 'DM Sans';
  }
  a {
    color: ${(props) => props.theme.colors.accent};
    text-decoration: none;
  }
`;

export default GlobalStyle;
