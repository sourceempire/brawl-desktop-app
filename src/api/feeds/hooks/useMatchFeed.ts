import { useFeed } from '@sourceempire/brawl-websocket';
import { MockGameMatch } from 'types/match/Match';

type Params = {
  matchId: string;
};

const useMatchFeed = ({ matchId }: Params) => {
  const { data, loading } = useFeed<{ match: MockGameMatch }>(`match.${matchId}`);

  let team1 = data.match?.team1;
  let team2 = data.match?.team2;

  return {
    match: data.match ?? {},
    team1,
    team2,
    isLoading: loading
  };
};

export default useMatchFeed;
