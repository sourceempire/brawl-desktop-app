import { useMatchResultFeed } from 'api/feeds';
import { useParams } from 'react-router-dom';
import { isCSGOMatchResult } from 'types/match/Match';
import CSGOMatchResult from './CSGOMatchResult';

const MatchResult = () => {
  const matchId = useParams().matchId as string;

  const { matchResult, teams, isLoading } = useMatchResultFeed(matchId);
  if (isLoading) return null;

  if (isCSGOMatchResult(matchResult)) {
    return <CSGOMatchResult matchResult={matchResult} teams={teams} />;
  }

  return null;
};

export default MatchResult;
