import { useContext } from 'react';
import { useMatchFeed } from 'api/feeds';
import { useMatchStatsFeed } from 'api/feeds/hooks/useMatchStatsFeed';
import CSGOMatchResult from 'common/components/MatchResult/CSGOMatchResult';
import { Button } from 'common/ui';
import { MatchResultModalContext } from 'context/MatchResultModalContext';
import { isCSGOMatch } from 'types/match/Match';
import { Buttons, Header, Wrapper } from './MatchResultModalContent.styles';

type Props = {
  matchId: string;
};

const MatchResultModalContent = ({ matchId }: Props) => {
  const { gameMatchInfo, team1, team2, isLoading: isLoadingMatch } = useMatchFeed({ matchId });
  const {
    matchStats,
    roundWins,
    isLoading: isLoadingMatchStats,
    hasMatchStats
  } = useMatchStatsFeed({ matchId });
  const { hideModal } = useContext(MatchResultModalContext);

  if (isLoadingMatch || isLoadingMatchStats) return null;

  if (!hasMatchStats) {
    return <Wrapper>No match result for this match yet</Wrapper>;
  }

  return (
    <Wrapper>
      <Header>Match result</Header>

      {isCSGOMatch(gameMatchInfo) && (
        <CSGOMatchResult
          matchStats={matchStats}
          roundWins={roundWins}
          match={gameMatchInfo}
          team1={team1}
          team2={team2}
          disableBackgroundFadeIn
        />
      )}

      <Buttons>
        <Button onClick={hideModal}>Close</Button>
      </Buttons>
    </Wrapper>
  );
};

export default MatchResultModalContent;
