import styled from "styled-components";

const TestComponent = styled.div`
  background-color: #6f5858;
  height: 100vh;
`

function App() {
  return (
    <TestComponent>
      <p>App Name: {process.env.REACT_APP_NAME}</p>
      <p>Version: {process.env.REACT_APP_VERSION}</p>
    </TestComponent>
  );
}

export default App;
