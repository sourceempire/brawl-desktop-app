import { useFeed } from '@sourceempire/brawl-websocket';
import { Bracket as BracketType } from 'types/tournaments/Bracket';

type Params = {
  tournamentId: string;
};

const useBracketFeed = ({ tournamentId }: Params) => {
  const feed = useFeed<BracketType>(`bracket.${tournamentId}`);

  if (feed.loading) {
    return { isLoading: feed.loading };
  }

  return {
    bracket: feed.data,
    isLoading: feed.loading
  };
};

export default useBracketFeed;
