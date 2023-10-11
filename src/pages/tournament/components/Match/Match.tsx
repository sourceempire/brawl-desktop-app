import { useMatchContext } from 'context/MatchContext';
import { isCSGOMatch, isMockMatch } from 'types/match/Match';
import CSGOMatch from './CSGOMatch';
import MockMatch from './MockMatch';

const Match = () => {
  const { match } = useMatchContext();

  return (
    <>
      {isCSGOMatch(match) && <CSGOMatch />}
      {isMockMatch(match) && <MockMatch />}
    </>
  );
};

export default Match;
