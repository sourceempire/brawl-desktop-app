import { HashRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import LoadingView from 'frames/loading/LoadingView';
import LoginView from 'frames/login/LoginFrame';
import MainView from 'frames/main/MainFrame';
import { AppContainer } from './App.styles';
import { theme } from 'assets/styles/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <AppContainer>
          <Routes>
            <Route path="/loading" element={<LoadingView />} />
            <Route path="/login/*" element={<LoginView />} />
            <Route path="/main/*" element={<MainView />} />
          </Routes>
        </AppContainer>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
