import { useContext } from 'react';
import { useMatchResultFeed } from 'api/feeds';
import { Button } from 'common/components';
import { MatchResultModalContext } from 'context/MatchResultModalContext';
import CSGOMatchResult from 'pages/tournament/components/MatchHistory/CSGOMatchResult';
import { isCSGOMatchResult } from 'types/match/Match';
import { Buttons, Wrapper } from './MatchResultModalContent.styles';

type Props = {
  matchId: string;
};

// TODO -> Get tournament info if a tournament match
// TODO -> Add a header with tournament name and "Defeat" or "Victory"

const MatchResultModalContent = ({ matchId }: Props) => {
  const { matchResult, teams } = useMatchResultFeed(matchId);
  const { hideModal } = useContext(MatchResultModalContext);

  return (
    <Wrapper>
      {isCSGOMatchResult(matchResult) && (
        <CSGOMatchResult matchResult={matchResult} teams={teams} disableBackgroundFadeIn />
      )}

      <Buttons>
        <Button onClick={hideModal}>Close</Button>
        <Button>Go to tournament</Button>
      </Buttons>
    </Wrapper>
  );
};

export default MatchResultModalContent;
