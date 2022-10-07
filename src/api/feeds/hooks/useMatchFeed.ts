import { Match } from 'types/match/Match';
import useFeed from './useFeed';

const useMatchFeed = (matchId: string) => {
  const { currentState, isLoading } = useFeed<{ match: Match }>(`match.${matchId}`);

  return { match: currentState.match ?? {}, isLoading };
};

export default useMatchFeed;
