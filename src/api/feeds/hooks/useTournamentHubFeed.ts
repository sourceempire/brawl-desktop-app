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
  const feed = useFeed<FeedType>(`tournament.hub.${tournamentHubId}`);

  if (feed.loading) {
    return {
      isLoading: feed.loading
    };
  }

  return {
    tournamentHub: feed.data.tournamentHub,
    tournamentIds: feed.data.tournamentIds,
    isLoading: feed.loading
  };
};

export default useTournamentHubFeed;
