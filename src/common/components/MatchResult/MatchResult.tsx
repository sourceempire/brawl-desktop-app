import { useMatchFeed, useTournamentHubFeed } from 'api/feeds';
import { useMatchStatsFeed } from 'api/feeds/hooks/useMatchStatsFeed';
import { useParams } from 'react-router-dom';
import { isCSGOMatch, isMockMatch } from 'types/match/Match';
import CSGOMatchResult from './CSGOMatchResult';
import { Wrapper } from './MatchResult.styles';
import MockMatchResult from './MockMatchResult';
import useTournamentFeed from 'api/feeds/hooks/useTournamentFeed';

const MatchResult = () => {
  const matchId = useParams().matchId as string;
  const { gameMatchInfo, team1, team2, isLoading: isLoadingMatch } = useMatchFeed({ matchId });
  const { matchStats, roundWins } = useMatchStatsFeed({ matchId });

  const { tournamentId } = useParams() as { tournamentId: string };
  const { tournament } = useTournamentFeed({ tournamentId });
  const { tournamentHub, isLoading: isLoadingTournamentHub } = useTournamentHubFeed({
    tournamentHubId: tournament.tournamentHubId
  });

  if (isLoadingMatch || isLoadingTournamentHub) return null;

  if (isCSGOMatch(gameMatchInfo)) {
    return (
      <CSGOMatchResult
        matchStats={matchStats}
        roundWins={roundWins}
        match={gameMatchInfo}
        team1={team1}
        team2={team2}
      />
    );
  }
  if (isMockMatch(gameMatchInfo)) {
    return (
      <MockMatchResult
        gameMatchInfo={gameMatchInfo}
        team1={team1}
        team2={team2}
        imageId={tournamentHub.imageId}
      />
    );
  }

  return <Wrapper>No match result yet</Wrapper>;
};

export default MatchResult;
