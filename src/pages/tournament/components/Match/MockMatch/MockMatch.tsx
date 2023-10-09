import { MockGameMatch as MockGameMatchType } from 'types/match/Match';
import { Wrapper } from '../Match.styles';
import { useMatchContext } from 'context/MatchContext';

const MockMatch = () => {
  const { match, team1, team2 } = useMatchContext<MockGameMatchType>();

  console.log('MATCH', match);
  console.log('TEAM 1', team1);
  console.log('TEAM 2', team2);

  return <Wrapper></Wrapper>;
};

export default MockMatch;
