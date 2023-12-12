import {
  BracketType,
  SingleEliminationBracket as SingleEliminationBracketType
} from 'types/tournaments/Bracket';
import SingleEliminationBracket from './SingleEliminationBracket';

type Props = {
  numberOfTeams: number;
};

const listOfRounds = [
  'Round of 256',
  'Round of 128',
  'Round of 64',
  'Round of 32',
  'Round of 16',
  'Quarter finals',
  'Semi finals',
  'Final'
];

const SingleEliminationBracketSkeleton = ({ numberOfTeams }: Props) => {
  const finalRoundIndex = listOfRounds.length - 1;
  const numRounds = Math.log2(numberOfTeams);

  const bracket: SingleEliminationBracketType = {
    isFinished: false,
    tournamentId: '',
    type: BracketType.SINGLE_ELIMINATION,
    numberOfRounds: numRounds,
    bracketStructure: Array.from({ length: numRounds }).map((_, i) => {
      const index = finalRoundIndex - numRounds + 1 + i;

      return {
        roundName: listOfRounds[index],
        matches: Array.from({ length: Math.pow(2, finalRoundIndex - index) }).map(
          (_, matchIndex) => {
            return {
              matchId: '',
              nextMatchIndex: Math.floor(matchIndex / 2)
            };
          }
        )
      };
    })
  };

  if (bracket.bracketStructure.at(-1)) {
    bracket.bracketStructure.at(-1)!.matches[0].nextMatchIndex = null;
    bracket.bracketStructure.at(-1)!.matches.push({ matchId: '', nextMatchIndex: null });
  }

  return <SingleEliminationBracket bracket={bracket} />;
};

export default SingleEliminationBracketSkeleton;
