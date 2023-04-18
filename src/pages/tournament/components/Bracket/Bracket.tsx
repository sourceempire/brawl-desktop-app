import useBracketFeed from 'api/feeds/hooks/useBracketFeed';
import { isSingleElimination } from 'types/tournaments/Bracket';
import SingleEliminationBracket from './SingleEliminationBracket';

type Props = {
  tournamentId: string;
};

const Bracket = ({ tournamentId }: Props) => {
  const { bracket, isLoading } = useBracketFeed(tournamentId);

  if (isLoading) return null; // TODO -> Make a skeleton

  if (isSingleElimination(bracket)) {
    return <SingleEliminationBracket bracket={bracket} />;
  }

  return null;
};

export default Bracket;
