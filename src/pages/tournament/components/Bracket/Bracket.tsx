import useBracketFeed from 'api/feeds/hooks/useBracketFeed';
import { isSingleElimination } from 'types/tournaments/Bracket';
import SingleEliminationBracket from './SingleEliminationBracket';
import SingleEliminationSkeleton from './SingleEliminationSkeleton';

type Props = {
  tournamentId: string;
  numberOfTeams?: number;
};

const Bracket = ({ tournamentId, numberOfTeams }: Props) => {
  const { bracket, isLoading } = useBracketFeed(tournamentId);

  if (isLoading) {
    return <SingleEliminationSkeleton numberOfTeams={numberOfTeams} />;
  }

  if (isSingleElimination(bracket)) {
    return <SingleEliminationBracket bracket={bracket} />;
  }

  return null;
};

export default Bracket;
