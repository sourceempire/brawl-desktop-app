import { useFeed } from '@sourceempire/brawl-websocket';
import { PrizePool } from 'types/prize-pool/PrizePool';

type Params = {
  tournamentHubId: string;
};

const useTournamentHubPrizePoolFeed = ({ tournamentHubId }: Params) => {
  const feed = useFeed<{ prizePool: PrizePool[] }>(`tournament.hub.prizePool.${tournamentHubId}`);

  if (feed.loading) {
    return { isLoading: feed.loading };
  }

  return {
    prizePool: feed.data.prizePool,
    isLoading: feed.loading
  };
};

export default useTournamentHubPrizePoolFeed;
