import { useFeed } from '@sourceempire/brawl-websocket';
import { useLoggedInUser } from 'common/hooks';

type Params = {
  tournamentId: string;
};

const useCurrentTournamentMatchIdFeed = ({ tournamentId }: Params) => {
  const user = useLoggedInUser();

  const feed = useFeed<{ matchId: string | null }>(`tournament.match.${tournamentId}.${user.id}`);

  if (feed.loading) {
    return { isLoading: feed.loading };
  }

  return { matchId: feed.data.matchId, isLoading: feed.loading };
};

export default useCurrentTournamentMatchIdFeed;
