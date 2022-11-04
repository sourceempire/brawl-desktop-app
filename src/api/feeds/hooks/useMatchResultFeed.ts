import { MatchResult } from 'types/match/Match';
import { Team } from 'types/team/Team';
import useFeed from './useFeed';

type FeedType = {
  matchResult: MatchResult;
  teams: { [teamId: string]: Team };
};

const useMatchResultFeed = (matchId: string) => {
  const { currentState, isLoading } = useFeed<FeedType>(`match.result.${matchId}`);

  return { matchResult: currentState.matchResult, teams: currentState.teams, isLoading };
};

export default useMatchResultFeed;
