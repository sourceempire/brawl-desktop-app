import { MockGameMatch as MockGameMatchType } from 'types/match/Match';
import { MiddleContainer, Wrapper } from '../Match.styles';
import { useMatchContext } from 'context/MatchContext';
import OngoingMockGameMatch from './OngoingMockGameMatch';
import Team from './Team';

const MockMatch = () => {
  const { team1, team2 } = useMatchContext<MockGameMatchType>();

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
