import { useEffect, useState } from 'react';
import { getBracket } from 'api/requests/TournamentRequests';
import { Bracket as BracketType, isSingleElimination } from 'types/tournaments/Bracket';
import SingleEliminationBracket from './SingleEliminationBracket';

type Props = {
  tournamentId: string;
};

const Bracket = ({ tournamentId }: Props) => {
  const [bracket, setBracket] = useState<BracketType>();

  useEffect(() => {
    getBracket(tournamentId)
      .then((result) => {
        setBracket(result.bracket);
      })
      .catch(console.error);
  }, [tournamentId]);

  if (!bracket) return null; // TODO -> Make a skeleton

  if (isSingleElimination(bracket)) {
    return <SingleEliminationBracket bracket={bracket} />;
  }

  return null;
};

export default Bracket;
