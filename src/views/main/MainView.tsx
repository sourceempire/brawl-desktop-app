import { useEffect } from 'react';
import { ServerEventsProvider } from 'api/events/ServerEventsContext';
import { useAuth } from 'api/requests';
import DragableArea from 'common/components/DragableArea';
import { UserContextProvider } from 'context/UserContext';
import { Route, Routes } from 'react-router-dom';
import TournamentListView from '../../views/tournamentlist/TournamentListView';
import TopBar from './components/TopBar';
import { Page, Wrapper } from './MainView.styles';
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
        <UserContextProvider>
          <TopBar />
          <Page>
            <Routes>
              <Route path="/tournamentlist" element={<TournamentListView />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Page>
        </UserContextProvider>
      </ServerEventsProvider>
    </Wrapper>
  );
};

export default MainView;
