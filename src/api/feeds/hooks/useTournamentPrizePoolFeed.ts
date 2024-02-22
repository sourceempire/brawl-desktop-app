import { useFeed } from '@sourceempire/brawl-websocket';

type Params = {
  tournamentId: string;
};

type TournamentId = string;
type PrizePool = number;

const useTournamentPrizePoolFeed = ({ tournamentId }: Params) => {
  const feed = useFeed<{ prizePool: Record<TournamentId, PrizePool> }>(
    `tournament.prizePool.${tournamentId}`
  );

  if (feed.loading) {
    return { isLoading: feed.loading };
  }

  return {
    prizePool: feed.data.prizePool,
    isLoading: feed.loading
  };
};

export default useTournamentPrizePoolFeed;
