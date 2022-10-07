import useTournamentFeed from 'api/feeds/hooks/useTournamentFeed';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { Button } from 'common/components';
import Backdrop from 'common/components/Backdrop';
import Bracket from '../Bracket';
import CurrentMatchStage from '../CurrentMatchStage';
import { MatchStage } from '../CurrentMatchStage/CurrentMatchStage.types';
import Match from '../Match';
import NavItems from '../NavItems';
import Rules from '../Rules';
import TournamentInfo from '../TournamentInfo';
import {
  RightAlignedContainer,
  TournamentContent,
  TournamentNavbar,
  TournamentRoutesWrapper,
  Wrapper
} from './TournamentPage.styles';

const TournamentPage = () => {
  const { tournamentId } = useParams() as { tournamentId: string };

  const { tournament, isLoading } = useTournamentFeed(tournamentId);

  if (isLoading) return null;

  return (
    <Wrapper>
      <Backdrop />
      <TournamentInfo tournament={tournament} />

      <TournamentContent>
        <TournamentNavbar>
          <NavItems tournamentId={tournamentId} />
          <CurrentMatchStage currentStage={MatchStage.VETO} />
          <RightAlignedContainer>
            {tournament.tournamentHubId && (
              <Link to={`/main/tournaments/hub/${tournament.tournamentHubId}`}>
                <Button>Tournament Hub</Button>
              </Link>
            )}
          </RightAlignedContainer>
        </TournamentNavbar>

        <TournamentRoutesWrapper>
          <Routes>
            <Route index element={<Match tournament={tournament} />} />
            <Route path="bracket" element={<Bracket tournamentId={tournament.id} />} />
            <Route path="rules" element={<Rules />} />
            <Route path="chat" element={<div>Chat</div>} />
            <Route path="match-history" element={<div>Match History</div>} />
          </Routes>
        </TournamentRoutesWrapper>
      </TournamentContent>
    </Wrapper>
  );
};

export default TournamentPage;
