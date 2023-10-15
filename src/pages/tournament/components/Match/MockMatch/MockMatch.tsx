import { MockGameMatch as MockGameMatchType } from 'types/match/Match';
import { MiddleContainer, Wrapper } from '../Match.styles';
import { useMatchContext } from 'context/MatchContext';
import OngoingMockGameMatch from './OngoingMockGameMatch';
import Team from './Team';

const MockMatch = () => {
  const { match, team1, team2 } = useMatchContext<MockGameMatchType>();

  console.log('MATCH', match);
  console.log('TEAM 1', team1);
  console.log('TEAM 2', team2);

  return (
    <Wrapper>
      <Team team={team1} />

      <MiddleContainer>
        <OngoingMockGameMatch />
      </MiddleContainer>

      <Team team={team2} reversed />
    </Wrapper>
  );
};

export default MockMatch;
