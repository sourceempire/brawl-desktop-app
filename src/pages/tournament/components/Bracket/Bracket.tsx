import useBracketFeed from 'api/feeds/hooks/useBracketFeed';
import { isSingleElimination } from 'types/tournaments/Bracket';
import SingleEliminationBracket from './SingleEliminationBracket';
import SingleEliminationBracketSkeleton from './SingleEliminationBracketSkeleton';

type Props = {
  tournamentId: string;
  numberOfTeams?: number;
};

const Bracket = ({ tournamentId, numberOfTeams }: Props) => {
  const { bracket, isLoading } = useBracketFeed(tournamentId);

  if (isLoading) {
    return <SingleEliminationBracketSkeleton numberOfTeams={numberOfTeams} />;
  }

  if (isSingleElimination(bracket)) {
    return <SingleEliminationBracket bracket={bracket} />;
  }

  return null;
};

export default Bracket;
