import { useFeed } from 'brawl-websocket';
import { Tournament } from 'types/tournaments/TournamentInfo';

type Params = {
  tournamentId: string;
};

const useTournamentFeed = ({ tournamentId }: Params) => {
  const { data, loading } = useFeed<{ tournament: Tournament }>(`tournament.${tournamentId}`);

  return {
    tournament: data.tournament ?? {},
    isLoading: loading
  };
};

export default useTournamentFeed;
