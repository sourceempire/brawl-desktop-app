import { useEffect } from 'react';
import * as authRequests from 'api/requests/AuthRequests';
import { Route, Routes } from 'react-router-dom';
import Window from 'window';
import DragableArea from '../DragableArea';
import { Wrapper } from './MainView.styles';

const MainView = () => {
  useEffect(() => {
    authRequests.loginValidate().catch((err) => {
      if (err.status === 200) {
        Window.openLoginWindow();
        Window.closeMainWindow();
      }
      console.log(err);
    });
  });

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
            </>
          }
        />
      </Routes>
    </Wrapper>
  );
};

export default MainView;
