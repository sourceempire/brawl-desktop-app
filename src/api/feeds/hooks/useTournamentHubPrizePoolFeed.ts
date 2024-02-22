import { useFeed } from '@sourceempire/brawl-websocket';
import { PrizePoolRange } from 'types/prize-pool/PrizePool';

type Params = {
  tournamentHubId: string;
};

const useTournamentHubPrizePoolFeed = ({ tournamentHubId }: Params) => {
  const feed = useFeed<{ prizePoolRange: PrizePoolRange }>(
    `tournament.hub.prizePoolRange.${tournamentHubId}`
  );

  if (feed.loading) {
    return { isLoading: feed.loading };
  }

  return {
    prizePoolRange: feed.data.prizePoolRange,
    isLoading: feed.loading
  };
};

export default useTournamentHubPrizePoolFeed;
