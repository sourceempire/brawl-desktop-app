import { MatchStats } from 'types/match/Match';

type Options = {
  matchStats?: MatchStats;
  teamId?: string;
};

const useTeamScore = ({ matchStats, teamId }: Options) => {
  if (!teamId || !matchStats || !matchStats.maps) return null;

  if (!matchStats.maps[0].teams[teamId]) return null;

  return matchStats.maps[0].teams[teamId] && matchStats.maps[0].teams[teamId].score;
};

export default useTeamScore;
