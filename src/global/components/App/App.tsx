import { Route, Routes, BrowserRouter, Navigate} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../style/theme"
import DragableArea from "../DragableArea";
import LoadingView from "../LoadingView";
import LoginView from "../LoginView";
import LoggedInView from "../MainView";
import { AppContainer } from "./App.styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/loading" element={<LoadingView/>}/>
            <Route path="/login" element={<LoginView />} />
            <Route path="/home/*" element={<LoggedInView />} />
            <Route path="/" element={<Navigate to="/loading" />} />
          </Routes>
        </BrowserRouter>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
