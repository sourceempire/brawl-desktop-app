import { useMatchContext } from 'context/MatchContext';
import { isCSGOMatch, isMockMatch } from 'types/match/Match';
import CSGOMatch from './CSGOMatch';
import MockMatch from './MockMatch';

const Match = () => {
  const { gameMatchInfo } = useMatchContext();

  return (
    <>
      {isCSGOMatch(gameMatchInfo) && <CSGOMatch />}
      {isMockMatch(gameMatchInfo) && <MockMatch />}
    </>
  );
};

export default Match;
