import { useEffect, useState } from 'react';
import { useAuth } from 'api/requests';
import DragableArea from 'common/components/DragableArea';
import RootContextProvider from 'context';
import { Route, Routes } from 'react-router-dom';
import TournamentListView from '../../views/tournamentlist/TournamentListView';
import Friends from './components/Friends';
import TopBar from './components/TopBar';
import { RoutesContainer, Wrapper } from './MainView.styles';
import HomePage from './pages/HomePage';

const MainView = () => {
  const { loginValidate, error } = useAuth();
  const [areFriendsVisible, setFriendsVisible] = useState(false);

  const toggleFriends = () => {
    setFriendsVisible(!areFriendsVisible);
  };

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
        <RoutesContainer areFriendsVisible={areFriendsVisible}>
          <Routes>
            <Route path="/tournamentlist" element={<TournamentListView />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </RoutesContainer>
        <Friends visible={areFriendsVisible} />
      </RootContextProvider>
    </Wrapper>
  );
};

export default MainView;
