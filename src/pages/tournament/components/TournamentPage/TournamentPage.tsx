import { Route, Routes } from 'react-router-dom';
import { Hero } from 'pages/tournament-hub/components/TournamentHubPage/TournamentHubPage.styles';
import NavItems from '../NavItems';
import { TournamentContent, TournamentNavbar, Wrapper } from './TournamentPage.styles';
import temporaryHeroImage from 'assets/images/temporary-tournament-hub-hero.png';

const TournamentPage = () => {
  return (
    <Wrapper>
      <Hero image={temporaryHeroImage} />
      <TournamentContent>
        <TournamentNavbar>
          <NavItems />
        </TournamentNavbar>
        <Routes>
          <Route index element={<div>Match</div>} />
          <Route path="bracket" element={<div>Bracket</div>} />
          <Route path="rules" element={<div>Rules</div>} />
          <Route path="chat" element={<div>Chat</div>} />
        </Routes>
      </TournamentContent>
    </Wrapper>
  );
};

export default TournamentPage;
