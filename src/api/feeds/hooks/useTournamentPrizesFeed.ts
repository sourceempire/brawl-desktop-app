import { useFeed } from '@sourceempire/brawl-websocket';
import { Prize } from 'types/prizes/Prizes';

type Params = {
  tournamentId: string;
};

const useTournamentPrizesFeed = ({ tournamentId }: Params) => {
  const feed = useFeed<{ prizes: Prize[] }>(`tournament.prizes.${tournamentId}`);

  if (feed.loading) {
    return { isLoading: feed.loading };
  }

  return {
    prizes: feed.data.prizes,
    isLoading: feed.loading
  };
};

export default useTournamentPrizesFeed;
