import useBracketFeed from 'api/feeds/hooks/useBracketFeed';
import { isSingleElimination } from 'types/tournaments/Bracket';
import SingleEliminationBracket from './SingleEliminationBracket';
import SkeletonBracket from './SkeletonBracket';

type Props = {
  tournamentId: string;
  type?: string;
  numberOfTeams?: number;
};

const Bracket = ({ tournamentId, type, numberOfTeams }: Props) => {
  const { bracket, isLoading } = useBracketFeed(tournamentId);

  if (isLoading) {
    return <SkeletonBracket type={type} numberOfTeams={numberOfTeams} />;
  }

  if (isSingleElimination(bracket)) {
    return <SingleEliminationBracket bracket={bracket} />;
  }

  return null;
};

export default Bracket;
