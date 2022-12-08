import { MatchStats } from 'types/match/Match';

type Options = {
  matchStats?: MatchStats;
  teamId?: string;
};

const useTeamScore = ({ matchStats, teamId }: Options) => {
  if (!teamId || !matchStats) return null;

  if (!matchStats.maps[0].teams[teamId]) return null;

  return matchStats.maps[0].teams[teamId] && matchStats.maps[0].teams[teamId].score;

  return null;
};

export default useTeamScore;
