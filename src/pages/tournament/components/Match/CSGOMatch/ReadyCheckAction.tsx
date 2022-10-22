import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import CSGOMatchRequests from 'api/requests/match/CSGOMatchRequests';
import { Button } from 'common/components';
import { useMatchContext } from 'context/MatchContext';
import { CSGOMatch } from 'types/match/Match';
import { ReadyMark, WaitingAnimation, Wrapper } from './ReadyCheckAction.styles';

type Props = {
  userId: string;
};

const ReadyCheckAction = ({ userId }: Props) => {
  const { user: loggedInUser } = useLoggedInUser();
  const { match } = useMatchContext<CSGOMatch>();

  const isPlayerReady = match.veto.playersReady[userId];

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
        <Button primary onClick={() => CSGOMatchRequests.setReady(match.id)}>
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
