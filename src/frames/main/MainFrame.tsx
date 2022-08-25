import { useEffect, useState } from 'react';
import { useAuth } from 'api/requests';
import RootContextProvider from 'context';
import { Route, Routes } from 'react-router-dom';
import DragableArea from 'common/components/DragableArea';
import { FriendBar } from 'frames/main/friends';
import HomePage from 'pages/home';
import { useUpdateEffect } from 'utils/hooks';
import TournamentListView from '../../pages/tournament-list';
import { RoutesContainer, Wrapper } from './MainFrame.styles';
import TopBar from './top-bar/TopBar';

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
    console.log(error);
  }

  return (
    <Wrapper>
      <DragableArea />
      <RootContextProvider>
        <TopBar toggleFriends={toggleFriends} />
        <RoutesContainer isFriendBarVisible={isFriendBarVisible}>
          <Routes>
            <Route path="/tournamentlist" element={<TournamentListView />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </RoutesContainer>
        <FriendBar visible={isFriendBarVisible} />
      </RootContextProvider>
    </Wrapper>
  );
};

export default MainView;
