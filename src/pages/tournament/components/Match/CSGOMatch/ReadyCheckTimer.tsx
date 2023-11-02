import { useMatchContext } from 'context/MatchContext';
import { CSGOMatch } from 'types/match/Match';
import CountDown from '../../CountDown';
import { Text, Wrapper } from './ReadyCheckTimer.styles';

const ReadyCheckTimer = () => {
  const { match } = useMatchContext<CSGOMatch>();

  const readyCheckExpiration = match.veto?.readyCheckExpiration;

  if (!readyCheckExpiration) return null;

  return (
    <Wrapper>
      <Text>Veto will start when everyone is ready, or in</Text>
      <CountDown startTime={readyCheckExpiration}></CountDown>
    </Wrapper>
  );
};

export default ReadyCheckTimer;
