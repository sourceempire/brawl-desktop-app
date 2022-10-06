import useCurrentTournamentMatchFeed from 'api/feeds/hooks/useCurrentTournamentMatchFeed';
import { isCSGOMatch } from 'types/match/Match';
import { Tournament } from 'types/tournaments/TournamentInfo';
import CSGOMatch from './CSGOMatch';
import { Wrapper } from './Match.styles';

type Props = {
  tournament: Tournament;
};

const Match = ({ tournament }: Props) => {
  const { currentMatch, isLoading, secondTeam, loggedInUserTeam } = useCurrentTournamentMatchFeed(
    tournament.id
  );

  if (isLoading) return null;

  if (isCSGOMatch(currentMatch)) {
    return <CSGOMatch match={currentMatch} team1={loggedInUserTeam} team2={secondTeam} />;
  }
  return <Wrapper>Match</Wrapper>;
};

export default Match;
