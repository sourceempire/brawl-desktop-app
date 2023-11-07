import { useEffect, useState } from 'react';
import { useAuth } from 'api/requests';
import RootContextProvider from 'context';
import { Route, Routes } from 'react-router-dom';
import { useUpdateEffect } from 'common/hooks';
import { DragableArea } from 'common/ui';
import { FriendBar } from 'frames/main/friends';
import HomePage from 'pages/home';
import TournamentPage from 'pages/tournament';
import { TournamentHubPage } from 'pages/tournament-hub';
import TournamentListView from '../../pages/tournament-list';
import { RoutesContainer, Wrapper } from './MainFrame.styles';
import TopBar from './top-bar/TopBar';
import { TournamentHubListContextProvider } from 'pages/tournament-list/context/TournamentHubListContext';

const MainView = () => {
  const { loginValidate, error } = useAuth();
  const [isFriendBarVisible, setFriendBarVisible] = useState(
    localStorage.getItem('isFriendBarVisible') === 'true'
  );

  const toggleFriends = () => {
    setFriendBarVisible(!isFriendBarVisible);
  };

  useUpdateEffect(() => {
    localStorage.setItem('isFriendBarVisible', isFriendBarVisible?.toString());
  }, [isFriendBarVisible]);

  useEffect(() => {
    loginValidate();
  }, [loginValidate]);

  if (error) {
    console.error(error);
  }

  return (
    <Wrapper>
      <DragableArea />
      <RootContextProvider>
        <TopBar toggleFriends={toggleFriends} isFriendBarVisible={isFriendBarVisible} />
        <RoutesContainer isFriendBarVisible={isFriendBarVisible}>
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="tournaments">
                <Route
                  index
                  element={
                    <TournamentHubListContextProvider>
                      <TournamentListView />
                    </TournamentHubListContextProvider>
                  }
                />
                <Route path="hub/:hubId" element={<TournamentHubPage />} />
                <Route path=":tournamentId/*" element={<TournamentPage />} />
              </Route>
            </Route>
          </Routes>
        </RoutesContainer>
        <FriendBar visible={isFriendBarVisible} />
      </RootContextProvider>
    </Wrapper>
  );
};

export default MainView;
