import { MatchStats, RoundWin } from 'types/match/Match';
import useFeed from './useFeed';

export const useMatchStatsFeed = (matchId: string) => {
  const { currentState, isLoading } = useFeed<{
    matchStats: MatchStats;
    roundWins: RoundWin[];
    hasMatchStats: boolean;
  }>(`match.stats.${matchId}`);

  return {
    matchStats: currentState.matchStats ?? {},
    roundWins: currentState.roundWins ?? [],
    hasMatchStats: currentState.hasMatchStats,
    isLoading
  };
};
