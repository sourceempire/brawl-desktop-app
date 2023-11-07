import { useFeed } from '@sourceempire/brawl-websocket';
import { useLoggedInUser } from 'common/hooks';
import { TournamentMatchHistory } from 'types/tournaments/TournamentInfo';

type Params = {
  tournamentId: string;
};

function useTournamentMatchHistoryFeed({ tournamentId }: Params) {
  const user = useLoggedInUser();
  const feed = useFeed<{ matchHistory: TournamentMatchHistory }>(
    `tournament.match.history.${tournamentId}.${user.id}`
  );

  if (feed.loading) {
    return {
      isLoading: feed.loading
    };
  }

  return { matchHistoryList: feed.data.matchHistory?.matchList ?? [], isLoading: feed.loading };
}

export default useTournamentMatchHistoryFeed;
