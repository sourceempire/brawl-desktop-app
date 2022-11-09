import { useContext } from 'react';
import { Button } from 'common/components';
import { MatchResultModalContext } from 'context/MatchResultModalContext';
import CSGOMatchResult from 'pages/tournament/components/MatchHistory/CSGOMatchResult';
import { CSGOMatchResult as CSGOMatchResultType } from 'types/match/Match';
import { Team } from 'types/team/Team';
import { Buttons, Wrapper } from './MatchResultModalContent.styles';

type Props = {
  matchResult: CSGOMatchResultType;
  teams: { [teamId: string]: Team };
};

// TODO -> Get tournament info if a tournament match
// TODO -> Add a header with tournament name

const CSGOMatchResultModalContent = ({ matchResult, teams }: Props) => {
  const { hideModal } = useContext(MatchResultModalContext);

  return (
    <Wrapper>
      <CSGOMatchResult matchResult={matchResult} teams={teams} disableBackgroundFadeIn />
      <Buttons>
        <Button onClick={hideModal}>Close</Button>
        <Button>Go to tournament</Button>
      </Buttons>
    </Wrapper>
  );
};

export default CSGOMatchResultModalContent;
