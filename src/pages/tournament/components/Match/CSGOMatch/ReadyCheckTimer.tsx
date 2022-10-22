import CountDown from '../../CountDown';
import { Text, Wrapper } from './ReadyCheckTimer.styles';

type Props = {
  readyCheckExpiration: number;
};

const ReadyCheckTimer = ({ readyCheckExpiration }: Props) => {
  return (
    <Wrapper>
      <Text>Veto will start when everyone is ready, or in</Text>
      <CountDown startTime={readyCheckExpiration}></CountDown>
    </Wrapper>
  );
};

export default ReadyCheckTimer;
