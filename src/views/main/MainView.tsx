import { useEffect } from 'react';
import { ServerEventsProvider } from 'api/events/ServerEventsContext';
import { useAuth } from 'api/requests';
import DragableArea from 'common/components/DragableArea';
import { Route, Routes } from 'react-router-dom';
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
      <ServerEventsProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <p>Main View</p>
                <p>Version: {process.env.REACT_APP_VERSION}</p>
                <button onClick={logout}>Log out</button>
              </>
            }
          />
        </Routes>
      </ServerEventsProvider>
    </Wrapper>
  );
};

export default MainView;
