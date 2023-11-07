import { useBracketFeed, useTournamentMatchHistoryFeed } from 'api/feeds';
import useCurrentTournamentMatchIdFeed from 'api/feeds/hooks/useCurrentTournamentMatchIdFeed';
import useTournamentFeed from 'api/feeds/hooks/useTournamentFeed';
import { Link, Navigate, Route, Routes, useParams } from 'react-router-dom';
import PageContainer from 'common/components/PageContainer';
import { Button } from 'common/ui';
import { MatchContextProvider } from 'context/MatchContext';
import Bracket from '../Bracket';
import CurrentMatchStage from '../CurrentMatchStage';
import Match from '../Match';
import MatchHistory from '../MatchHistory/MatchHistory';
import NavItems from '../NavItems';
import Rules from '../Rules';
import TournamentInfo from '../TournamentInfo';
import {
  RightAlignedContainer,
  SpectatorWrapper,
  TournamentContent,
  TournamentName,
  TournamentNavbar,
  TournamentRoutesWrapper,
  Wrapper
} from './TournamentPage.styles';
import { isSingleElimination } from 'types/tournaments/Bracket';

const TournamentPage = () => {
  const { tournamentId } = useParams() as { tournamentId: string };

  const { tournament, isLoading: isLoadingTournament } = useTournamentFeed({ tournamentId });
  const { bracket, isLoading: isLoadingBracket } = useBracketFeed({ tournamentId });
  const { matchId, isLoading: isLoadingCurrentMatchId } = useCurrentTournamentMatchIdFeed({
    tournamentId
  });
  const { isLoading: isLoadingMatchHistory, matchHistoryList } = useTournamentMatchHistoryFeed({
    tournamentId
  });

  if (isLoadingCurrentMatchId || isLoadingTournament) return null;

  const isUserInTournament = matchId !== null;

  return (
    <PageContainer>
      <Wrapper>
        {isUserInTournament && !bracket?.isFinished ? (
          <>
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
                  {!isLoadingMatchHistory && (
                    <Route
                      path="match-history/*"
                      element={<MatchHistory matchList={matchHistoryList} />}
                    />
                  )}
                  <Route path="*" element={<Navigate to="bracket" replace />} />
                </Routes>
              </TournamentRoutesWrapper>
            </TournamentContent>
          </>
        ) : (
          <SpectatorWrapper>
            <TournamentName>{tournament.name}</TournamentName>
            {!isLoadingBracket && isSingleElimination(bracket) ? (
              <Bracket tournamentId={tournament.id} />
            ) : null}
          </SpectatorWrapper>
        )}
      </Wrapper>
    </PageContainer>
  );
};

export default TournamentPage;
