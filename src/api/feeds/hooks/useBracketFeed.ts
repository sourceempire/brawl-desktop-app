import { useFeed } from 'brawl-websocket';
import { Bracket as BracketType } from 'types/tournaments/Bracket';

const useBracketFeed = (tournamentId: string) => {
  const { data, loading } = useFeed<BracketType>(`bracket.${tournamentId}`);

  return {
    brackets: data ?? {},
    isLoading: loading
  };
};

export default useBracketFeed;
