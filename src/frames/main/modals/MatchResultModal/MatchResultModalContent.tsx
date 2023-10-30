import { useContext } from 'react';
import { useMatchFeed } from 'api/feeds';
import CSGOMatchResult from 'common/components/MatchResult/CSGOMatchResult';
import { Button } from 'common/ui';
import { MatchResultModalContext } from 'context/MatchResultModalContext';
import { isCSGOMatch } from 'types/match/Match';
import { Buttons, Header, Wrapper } from './MatchResultModalContent.styles';

type Props = {
  matchId: string;
};

const MatchResultModalContent = ({ matchId }: Props) => {
  // const { match, team1, team2, isLoading: isLoadingMatch } = useMatchFeed({ matchId });
  // const {
  //   matchStats,
  //   roundWins,
  //   isLoading: isLoadingMatchStats,
  //   hasMatchStats
  // } = useMatchStatsFeed({ matchId });
  const { hideModal } = useContext(MatchResultModalContext);

  // if (isLoadingMatch || isLoadingMatchStats) return null;

  // if (!hasMatchStats) {
  //   return <Wrapper>No match result for this match yet</Wrapper>;
  // }

  return (
    <div />
    // <Wrapper>
    //   <Header>Match result</Header>

    //   {isCSGOMatch(match) && (
    //     <CSGOMatchResult
    //       matchStats={matchStats}
    //       roundWins={roundWins}
    //       match={match}
    //       team1={team1}
    //       team2={team2}
    //       disableBackgroundFadeIn
    //     />
    //   )}

    //   <Buttons>
    //     <Button onClick={hideModal}>Close</Button>
    //   </Buttons>
    // </Wrapper>
  );
};

export default MatchResultModalContent;
