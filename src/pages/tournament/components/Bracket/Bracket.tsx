import useBracketFeed from 'api/feeds/hooks/useBracketFeed';
import { isSingleElimination } from 'types/tournaments/Bracket';
import SingleEliminationBracket from './SingleEliminationBracket';
import SingleEliminationBracketSkeleton from './SingleEliminationBracketSkeleton';

type Props = {
  tournamentId: string;
  numberOfTeams?: number;
  gameId: string;
};

const Bracket = ({ tournamentId, numberOfTeams, gameId }: Props) => {
  const { bracket, isLoading } = useBracketFeed({ tournamentId });

  if (isLoading) {
    return <SingleEliminationBracketSkeleton numberOfTeams={numberOfTeams} />;
  }

  if (isSingleElimination(bracket)) {
    return <SingleEliminationBracket bracket={bracket} gameId={gameId} />;
  }

  return null;
};

export default Bracket;
