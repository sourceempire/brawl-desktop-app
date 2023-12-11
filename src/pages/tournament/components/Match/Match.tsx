import { useMatchContext } from 'context/MatchContext';
import { isMockMatch } from 'types/match/Match';
import MockMatch from './MockMatch';

const Match = () => {
  const { match, isLoading } = useMatchContext();

  if (isLoading) return null;

  return <>{isMockMatch(match) && <MockMatch />}</>;
};

export default Match;
