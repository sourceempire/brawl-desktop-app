import { ThemeProvider } from "styled-components";
import { theme } from "../../style/theme"
import { AppContainer } from "./App.styles";
// import Window from "./window/Window";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <p>Version: {process.env.REACT_APP_VERSION}</p>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
