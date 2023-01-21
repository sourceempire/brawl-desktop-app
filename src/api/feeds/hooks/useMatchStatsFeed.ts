import { useFeed } from 'brawl-websocket';
import { MatchStats, RoundWin } from 'types/match/Match';

export const useMatchStatsFeed = (matchId: string) => {
  const { data, loading } = useFeed<{
    matchStats: MatchStats;
    roundWins: RoundWin[];
    hasMatchStats: boolean;
  }>(`match.stats.${matchId}`);

  return {
    matchStats: data.matchStats ?? {},
    roundWins: data.roundWins ?? [],
    hasMatchStats: data.hasMatchStats,
    isLoading: loading
  };
};
