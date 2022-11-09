import { useMatchResultFeed } from 'api/feeds';
import { isCSGOMatchResult } from 'types/match/Match';
import CSGOMatchResultModalContent from './CSGOMatchResultModalContent';
import { Wrapper } from './MatchResultModalContent.styles';

type Props = {
  matchId: string;
};

const MatchResultModalContent = ({ matchId }: Props) => {
  const { matchResult, teams } = useMatchResultFeed(matchId);

  if (isCSGOMatchResult(matchResult)) {
    return <CSGOMatchResultModalContent matchResult={matchResult} teams={teams} />;
  }

  return <Wrapper>Not csgo match result</Wrapper>;
};

export default MatchResultModalContent;
