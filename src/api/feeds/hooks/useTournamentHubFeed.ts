import { useFeed } from 'brawl-websocket';
import { TournamentHub } from 'types/tournaments/TournamentInfo';

type FeedType = {
  tournamentHub: TournamentHub;
  tournamentIds: string[];
};

const useTournamentHubFeed = (tournamentHubId: string) => {
  const { data, loading } = useFeed<FeedType>(`tournament.hub.${tournamentHubId}`);

  return {
    tournamentHub: data.tournamentHub ?? {},
    tournamentIds: data.tournamentIds ?? [],
    isLoading: loading
  };
};

export default useTournamentHubFeed;
