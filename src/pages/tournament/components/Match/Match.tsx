import { useMatchContext } from 'context/MatchContext';
import { getMatchType } from 'types/match/Match';
import CSGOMatch from './CSGOMatch';
import { GameTag } from 'types/Game';
import MockMatch from './MockMatch';

const Match = () => {
  const { match } = useMatchContext();

  const matchType = getMatchType(match);

  return (
    <>
      {matchType === GameTag.CSGO && <CSGOMatch />}
      {matchType === GameTag.MOCK && <MockMatch />}
    </>
  );
};

export default Match;
