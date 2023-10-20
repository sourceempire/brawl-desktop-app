import { useFeed } from '@sourceempire/brawl-websocket';
import { TournamentHub } from 'types/tournaments/TournamentInfo';

type FeedType = {
  tournamentHub: TournamentHub;
  tournamentIds: string[];
};

type Params = {
  tournamentHubId: string;
};

const useTournamentHubFeed = ({ tournamentHubId }: Params) => {
  const { data, loading } = useFeed<FeedType>(`tournament.hub.${tournamentHubId}`);

  return {
    tournamentHub: data.tournamentHub ?? {},
    tournamentIds: data.tournamentIds ?? [],
    isLoading: loading
  };
};

export default useTournamentHubFeed;
