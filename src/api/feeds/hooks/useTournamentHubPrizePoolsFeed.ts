import { useFeed } from '@sourceempire/brawl-websocket';
import { PrizePools } from 'types/prize-pool/PrizePool';

type Params = {
  tournamentHubId: string;
};

const useTournamentHubPrizePoolsFeed = ({ tournamentHubId }: Params) => {
  const feed = useFeed<{ prizePools: PrizePools }>(`tournament.hub.prizePools.${tournamentHubId}`);

  if (feed.loading) {
    return { isLoading: feed.loading };
  }

  return {
    prizePools: feed.data.prizePools,
    isLoading: feed.loading
  };
};

export default useTournamentHubPrizePoolsFeed;
