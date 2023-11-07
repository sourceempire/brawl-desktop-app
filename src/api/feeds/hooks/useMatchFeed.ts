import { useFeed } from '@sourceempire/brawl-websocket';
import { MockGameMatch } from 'types/match/Match';

type Params = {
  matchId: string;
};

const useMatchFeed = ({ matchId }: Params) => {
  const feed = useFeed<{ match: MockGameMatch }>(`match.${matchId}`);

  if (feed.loading) {
    return { isLoading: feed.loading };
  }

  let team1 = feed.data.match.team1;
  let team2 = feed.data.match.team2;

  return {
    match: feed.data.match,
    team1,
    team2,
    isLoading: feed.loading
  };
};

export default useMatchFeed;
