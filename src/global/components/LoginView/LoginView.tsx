import { Route, Routes } from 'react-router-dom';
import DragableArea from '../DragableArea';
import { Wrapper } from './LoginView.styles';

const LoginView = () => {
  return (
    <Wrapper>
      <DragableArea />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <p>Login view</p>
              <p>Version: {process.env.REACT_APP_VERSION}</p>
            </>
          }
        />
      </Routes>
    </Wrapper>
  );
};

export default LoginView;
