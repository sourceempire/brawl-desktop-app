import { useMatchContext } from 'context/MatchContext';
import { CSGOMatchStage, CSGOMatch as CSGOMatchType } from 'types/match/Match';
import { MiddleContainer, Wrapper } from '../Match.styles';
import CSGOVeto from './CSGOVeto';
import ReadyCheckTimer from './ReadyCheckTimer';
import Team from './Team';

const CSGOMatch = () => {
  const { match, team1, team2 } = useMatchContext<CSGOMatchType>();

  const isReadyCheck = match.matchStage === CSGOMatchStage.READY;
  const isVeto = match.matchStage === CSGOMatchStage.VETO;

  return (
    <Wrapper>
      <Team team={team1} />

      <MiddleContainer>
        {isReadyCheck && <ReadyCheckTimer />}
        {isVeto && <CSGOVeto />}
      </MiddleContainer>

      <Team team={team2} reversed />
    </Wrapper>
  );
};

export default CSGOMatch;
