import useTournamentFeed from 'api/feeds/hooks/useTournamentFeed';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { Button } from 'common/components';
import CurrentMatchStage from '../CurrentMatchStage';
import { MatchStage } from '../CurrentMatchStage/CurrentMatchStage.types';
import Match from '../Match';
import NavItems from '../NavItems';
import TournamentInfo from '../TournamentInfo';
import {
  RightAlignedContainer,
  TournamentContent,
  TournamentNavbar,
  Wrapper
} from './TournamentPage.styles';

const TournamentPage = () => {
  const { tournamentId } = useParams() as { tournamentId: string };

  const { tournament, isLoading } = useTournamentFeed(tournamentId);

  return (
    <Wrapper>
      <TournamentInfo tournament={tournament} />
      <TournamentContent>
        <TournamentNavbar>
          <NavItems tournamentId={tournamentId} />
          <CurrentMatchStage currentStage={MatchStage.COMPLETE} />
          <RightAlignedContainer>
            {tournament.tournamentHubId && (
              <Link to={`/main/tournaments/hub/${tournament.tournamentHubId}`}>
                <Button>Tournament Hub</Button>
              </Link>
            )}
          </RightAlignedContainer>
        </TournamentNavbar>

        <Routes>
          <Route index element={<Match />} />
          <Route path="bracket" element={<div>Bracket</div>} />
          <Route path="rules" element={<div>Rules</div>} />
          <Route path="chat" element={<div>Chat</div>} />
          <Route path="match-history" element={<div>Match History</div>} />
        </Routes>
      </TournamentContent>
    </Wrapper>
  );
};

export default TournamentPage;
