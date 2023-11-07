import { useContext } from 'react';
import { useMatchFeed } from 'api/feeds';
import CSGOMatchResult from 'common/components/MatchResult/CSGOMatchResult';
import { Button } from 'common/ui';
import { MatchResultModalContext } from 'context/MatchResultModalContext';
import { isCSGOMatch, isMockMatch } from 'types/match/Match';
import { Buttons, Header, TopWrapper, Wrapper } from './MatchResultModalContent.styles';
import MockMatchResult from 'common/components/MatchResult/MockMatchResult';

type Props = {
  matchId: string;
};

const MatchResultModalContent = ({ matchId }: Props) => {
  const { gameMatchInfo, team1, team2, isLoading: isLoadingMatch } = useMatchFeed({ matchId });
  const { matchStats, roundWins } = useMatchStatsFeed({ matchId });
  const { hideModal } = useContext(MatchResultModalContext);

  if (isLoadingMatch) return null;

  return (
    <Wrapper>
      <TopWrapper>
        <Header>Match result</Header>
        <Buttons>
          <Button onClick={hideModal}>Close</Button>
        </Buttons>
      </TopWrapper>

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

      {isMockMatch(gameMatchInfo) && (
        <MockMatchResult
          gameMatchInfo={gameMatchInfo}
          team1={team1}
          team2={team2}
          disableBackgroundFadeIn
        />
      )}
    </Wrapper>
  );
};

export default MatchResultModalContent;
