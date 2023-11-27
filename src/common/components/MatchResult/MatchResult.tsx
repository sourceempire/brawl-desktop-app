import { useMatchFeed, useTournamentHubFeed } from 'api/feeds';
import { useParams } from 'react-router-dom';
import { isMockMatch } from 'types/match/Match';
import { Wrapper } from './MatchResult.styles';
import MockMatchResult from './MockMatchResult';
import useTournamentFeed from 'api/feeds/hooks/useTournamentFeed';

const MatchResult = () => {
  const matchId = useParams().matchId as string;
  const { match, team1, team2, isLoading: isLoadingMatch } = useMatchFeed({ matchId });

  const { tournamentId } = useParams() as { tournamentId: string };
  const { tournament } = useTournamentFeed({ tournamentId });

  let tournamentHubId = tournament ? tournament.tournamentHubId : null;

  const { tournamentHub, isLoading: isLoadingTournamentHub } = useTournamentHubFeed({
    tournamentHubId: tournamentHubId
  });

  if (isLoadingMatch || isLoadingTournamentHub) return null;

  if (isMockMatch(match)) {
    return (
      <MockMatchResult match={match} team1={team1} team2={team2} imageId={tournamentHub.imageId} />
    );
  }

  return <Wrapper>No match result yet</Wrapper>;
};

export default MatchResult;
