import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'assets/styles/fonts.css';
import '@sourceempire/brawl-ui/dist/style.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // https://stackoverflow.com/questions/61254372/my-react-component-is-rendering-twice-because-of-strict-mode
  // <React.StrictMode>

  <App />

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
