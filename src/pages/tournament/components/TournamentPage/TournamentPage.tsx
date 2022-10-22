import useCurrentTournamentMatchFeed from 'api/feeds/hooks/useCurrentTournamentMatchFeed';
import useTournamentFeed from 'api/feeds/hooks/useTournamentFeed';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { Button } from 'common/components';
import Backdrop from 'common/components/Backdrop';
import { MatchContextProvider } from 'context/MatchContext';
import Bracket from '../Bracket';
import CurrentMatchStage from '../CurrentMatchStage';
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

  const { tournament, isLoading: isLoadingTournament } = useTournamentFeed(tournamentId);

  const { matchId, isLoading: isLoadingMatchId } = useCurrentTournamentMatchFeed(tournamentId);

  if (isLoadingMatchId || isLoadingTournament) return null;

  return (
    <Wrapper>
      <Backdrop />
      <TournamentInfo tournament={tournament} currentMatchId={matchId} />

      <TournamentContent>
        <TournamentNavbar>
          <NavItems tournamentId={tournamentId} />
          <CurrentMatchStage matchId={matchId} />
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
            <Route
              index
              element={
                <MatchContextProvider matchId={matchId}>
                  <Match />
                </MatchContextProvider>
              }
            />
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
