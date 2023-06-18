import useBracketFeed from 'api/feeds/hooks/useBracketFeed';
import { isSingleElimination, isSkeletonBracket } from 'types/tournaments/Bracket';
import SingleEliminationBracket from './SingleEliminationBracket';
import SkeletonBracket from './SkeletonBracket';

type Props = {
  tournamentId: string;
  numberOfTeams?: number;
};

const Bracket = ({ tournamentId, numberOfTeams }: Props) => {
  const { bracket, isLoading } = useBracketFeed(tournamentId);

  if (isSkeletonBracket(bracket) || isLoading) {
    return <SkeletonBracket numberOfTeams={numberOfTeams} />;
  }

  if (isSingleElimination(bracket)) {
    return <SingleEliminationBracket bracket={bracket} />;
  }

  return null;
};

export default Bracket;
