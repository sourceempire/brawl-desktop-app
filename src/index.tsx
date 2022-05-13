import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from 'views/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/Theme';

// loading fonts with styled components is problematic:
// https://styled-components.com/docs/faqs#how-do-i-fix-flickering-text-after-server-side-rendering
import 'assets/styles/fonts.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // https://stackoverflow.com/questions/61254372/my-react-component-is-rendering-twice-because-of-strict-mode
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
