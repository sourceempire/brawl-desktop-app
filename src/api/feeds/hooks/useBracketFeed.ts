import { useFeed } from '@sourceempire/brawl-websocket';
import { Bracket as BracketType } from 'types/tournaments/Bracket';

type Params = {
  tournamentId: string;
};

const useBracketFeed = ({ tournamentId }: Params) => {
  const { data, loading } = useFeed<BracketType>(`bracket.${tournamentId}`);

  return {
    bracket: data,
    isLoading: loading
  };
};

export default useBracketFeed;
