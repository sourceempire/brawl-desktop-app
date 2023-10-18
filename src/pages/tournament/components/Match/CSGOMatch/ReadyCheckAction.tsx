import CSGOMatchRequests from 'api/requests/match/CSGOMatchRequests';
import { useLoggedInUser } from 'common/hooks';
import { Button } from 'common/ui';
import { useMatchContext } from 'context/MatchContext';
import { CSGOMatch } from 'types/match/Match';
import { ReadyMark, WaitingAnimation, Wrapper } from './ReadyCheckAction.styles';

type Props = {
  userId: string;
};

const ReadyCheckAction = ({ userId }: Props) => {
  const loggedInUser = useLoggedInUser();
  const { gameMatchInfo } = useMatchContext<CSGOMatch>();

  const isPlayerReady = gameMatchInfo.veto?.playersReady[userId];

  if (isPlayerReady) {
    return (
      <Wrapper>
        <ReadyMark />
      </Wrapper>
    );
  }

  if (userId === loggedInUser.id) {
    return (
      <Wrapper>
        <Button primary onClick={() => CSGOMatchRequests.setReady(gameMatchInfo.id)}>
          {`I'm ready`}
        </Button>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <WaitingAnimation />
    </Wrapper>
  );
};

export default ReadyCheckAction;
