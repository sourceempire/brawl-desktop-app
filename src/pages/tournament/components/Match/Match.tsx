import { useMatchContext } from 'context/MatchContext';
import { isCSGOMatch } from 'types/match/Match';
import CSGOMatch from './CSGOMatch';

const Match = () => {
  const { match } = useMatchContext();

  return <>{isCSGOMatch(match) && <CSGOMatch />}</>;
};

export default Match;
