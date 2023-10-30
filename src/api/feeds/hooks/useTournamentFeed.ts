import { useFeed } from '@sourceempire/brawl-websocket';
import { Tournament } from 'types/tournaments/TournamentInfo';

type Params = {
  tournamentId: string;
};

const useTournamentFeed = ({ tournamentId }: Params) => {
  const feed = useFeed<{ tournament: Tournament }>(`tournament.${tournamentId}`);

  if (feed.loading) {
    return { isLoading: feed.loading };
  }

  return {
    tournament: feed.data.tournament,
    isLoading: feed.loading
  };
};

export default useTournamentFeed;
