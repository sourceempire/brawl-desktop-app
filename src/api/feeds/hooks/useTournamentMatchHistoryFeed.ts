import { useFeed } from 'brawl-websocket';
import { useLoggedInUser } from 'common/hooks';
import { TournamentMatchHistory } from 'types/tournaments/TournamentInfo';

type Params = {
  tournamentId: string;
};

function useTournamentMatchHistoryFeed({ tournamentId }: Params) {
  const user = useLoggedInUser();
  const feedString = `tournament.match.history.${tournamentId}.${user.id}`;
  const { data, loading } = useFeed<{ matchHistory: TournamentMatchHistory }>(feedString);

  return { matchHistoryList: data.matchHistory?.matchList ?? [], isLoading: loading };
}

export default useTournamentMatchHistoryFeed;
