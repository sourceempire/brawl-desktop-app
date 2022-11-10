import { useMatchResultFeed } from 'api/feeds';
import { useParams } from 'react-router-dom';
import { isCSGOMatchResult } from 'types/match/Match';
import CSGOMatchResult from './CSGOMatchResult';
import { Wrapper } from './MatchResult.styles';

const MatchResult = () => {
  const matchId = useParams().matchId as string;
  const { matchResult, teams, isLoading } = useMatchResultFeed(matchId);

  if (isLoading) return null;

  if (matchResult && isCSGOMatchResult(matchResult)) {
    return <CSGOMatchResult matchResult={matchResult} teams={teams} />;
  }

  return <Wrapper>No match result yet</Wrapper>;
};

export default MatchResult;
