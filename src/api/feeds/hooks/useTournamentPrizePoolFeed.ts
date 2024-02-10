import { useFeed } from '@sourceempire/brawl-websocket';
import { PrizePool } from 'types/prize-pool/PrizePool';

type Params = {
  tournamentId: string;
};

const useTournamentPrizePoolFeed = ({ tournamentId }: Params) => {
  const feed = useFeed<{ prizePool: PrizePool }>(`tournament.prizePool.${tournamentId}`);

  if (feed.loading) {
    return { isLoading: feed.loading };
  }

  return {
    prizePool: feed.data.prizePool,
    isLoading: feed.loading
  };
};

export default useTournamentPrizePoolFeed;
