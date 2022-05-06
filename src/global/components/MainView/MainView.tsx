import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'global/hooks';
import DragableArea from '../DragableArea';
import { Wrapper } from './MainView.styles';

const MainView = () => {
  const { loginValidate, logout, error } = useAuth();

  useEffect(() => {
    loginValidate();
  }, [loginValidate]);

  if (error) {
    console.log(error);
  }

  return (
    <Wrapper>
      <DragableArea />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <p>Main View</p>
              <p>Version: {process.env.REACT_APP_VERSION}</p>
              <p>Fett kul att den uppdaterades</p>
              <button onClick={logout}>Log out</button>
            </>
          }
        />
      </Routes>
    </Wrapper>
  );
};

export default MainView;
