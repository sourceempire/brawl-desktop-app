import { useMatchContext } from 'context/MatchContext';
import { MockGameMatch as MockGameMatchType } from 'types/match/Match';
import { Score, ScoreWrapper, Wrapper } from './OngoingMockGameMatch.styles';

const OngoingMockGameMatch = () => {
  const { team1, team2, isLoading } = useMatchContext<MockGameMatchType>();

  if (isLoading) return null;

  return (
    <Wrapper>
      <ScoreWrapper>
        <Score>{team1?.score}</Score>
        <Score>-</Score>
        <Score>{team2?.score}</Score>
      </ScoreWrapper>
    </Wrapper>
  );
};

export default OngoingMockGameMatch;
