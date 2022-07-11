import { useEffect } from 'react';
import { ServerEventsProvider } from 'api/events/ServerEventsContext';
import { useAuth } from 'api/requests';
import DragableArea from 'common/components/DragableArea';
import { Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar';
import { Wrapper } from './MainView.styles';
import HomePage from './pages/HomePage';

const MainView = () => {
  const { loginValidate, error } = useAuth();

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
        <TopBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ServerEventsProvider>
    </Wrapper>
  );
};

export default MainView;
