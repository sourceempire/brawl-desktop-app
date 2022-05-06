import { HashRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'global/style/Theme';
import LoadingView from '../LoadingView';
import LoginView from '../LoginView';
import MainView from '../MainView';
import { AppContainer } from './App.styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <AppContainer>
          <Routes>
            <Route path="/loading" element={<LoadingView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/main/*" element={<MainView />} />
          </Routes>
        </AppContainer>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
