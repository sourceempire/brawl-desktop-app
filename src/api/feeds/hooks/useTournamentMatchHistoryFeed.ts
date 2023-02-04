import { useFeed } from 'brawl-websocket';
import { useLoggedInUser } from 'common/hooks';
import { TournamentMatchHistory } from 'types/tournaments/TournamentInfo';

function useTournamentMatchHistoryFeed(tournamentId: string) {
  const user = useLoggedInUser();
  const feedString = `tournament.match.history.${tournamentId}.${user.id}`;
  const { data, loading } = useFeed<{ matchHistory: TournamentMatchHistory }>(feedString);

  return { matchHistoryList: data.matchHistory?.matchList ?? [], isLoading: loading };
}

export default useTournamentMatchHistoryFeed;
