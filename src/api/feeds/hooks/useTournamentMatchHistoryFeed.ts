import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import { TournamentMatchHistory } from 'types/tournaments/TournamentInfo';
import useFeed from './useFeed';

function useTournamentMatchHistoryFeed(tournamentId: string) {
  const { user } = useLoggedInUser();
  const feedString = `tournament.match.history.${tournamentId}.${user.id}`;
  const { currentState, isLoading } = useFeed<{ matchHistory: TournamentMatchHistory }>(feedString);

  return { matchHistoryList: currentState.matchHistory?.matchList ?? [], isLoading };
}

export default useTournamentMatchHistoryFeed;
