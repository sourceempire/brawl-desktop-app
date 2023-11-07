import { useMatchFeed } from 'api/feeds';
import { useParams } from 'react-router-dom';
import { isCSGOMatch } from 'types/match/Match';
import CSGOMatchResult from './CSGOMatchResult';
import { Wrapper } from './MatchResult.styles';

const MatchResult = () => {
  const matchId = useParams().matchId as string;

  // const { match, team1, team2, isLoading: isLoadingMatch } = useMatchFeed({ matchId });
  // const {
  //   matchStats,
  //   roundWins,
  //   hasMatchStats,
  //   isLoading: isLoadngMatchStats
  // } = useMatchStatsFeed({ matchId });

  // if (isLoadingMatch || isLoadngMatchStats) return null;

  // if (!hasMatchStats) {
  //   return <Wrapper>No match result for this match yet</Wrapper>;
  // }

  // if (isCSGOMatch(match)) {
  //   return (
  //     <CSGOMatchResult
  //       matchStats={matchStats}
  //       roundWins={roundWins}
  //       match={match}
  //       team1={team1}
  //       team2={team2}
  //     />
  //   );
  // }

  return <Wrapper>No match result yet</Wrapper>;
};

export default MatchResult;
