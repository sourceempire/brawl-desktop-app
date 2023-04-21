import { useTournamentMatchHistoryFeed } from 'api/feeds';
import useCurrentTournamentMatchFeed from 'api/feeds/hooks/useCurrentTournamentMatchFeed';
import useTournamentFeed from 'api/feeds/hooks/useTournamentFeed';
import { Link, Navigate, Route, Routes, useParams } from 'react-router-dom';
import { Backdrop, Button } from 'common/ui';
import { MatchContextProvider } from 'context/MatchContext';
import PageFrame from 'frames/page';
import Bracket from '../Bracket';
import CurrentMatchStage from '../CurrentMatchStage';
import Match from '../Match';
import MatchHistory from '../MatchHistory/MatchHistory';
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
  const { matchHistoryList } = useTournamentMatchHistoryFeed(tournamentId);

  if (isLoadingMatchId || isLoadingTournament) return null;

  return (
    <PageFrame>
      <Wrapper>
        <Backdrop />
        <TournamentInfo tournament={tournament} currentMatchId={matchId} />

        <TournamentContent>
          <TournamentNavbar>
            <NavItems tournamentId={tournamentId} matchId={matchId} />
            {matchId ? <CurrentMatchStage matchId={matchId} /> : <div />}
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
              {matchId && (
                <Route
                  index
                  element={
                    <MatchContextProvider matchId={matchId}>
                      <Match />
                    </MatchContextProvider>
                  }
                />
              )}
              <Route path="bracket" element={<Bracket tournamentId={tournament.id} />} />
              <Route path="rules" element={<Rules />} />
              <Route
                path="match-history/*"
                element={<MatchHistory matchList={matchHistoryList} />}
              />
              <Route path="*" element={<Navigate to="bracket" replace />} />
            </Routes>
          </TournamentRoutesWrapper>
        </TournamentContent>
      </Wrapper>
    </PageFrame>
  );
};

export default TournamentPage;
