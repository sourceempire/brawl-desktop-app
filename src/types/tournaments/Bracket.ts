export enum BracketType {
  SINGLE_ELIMINATION = 'single_elimination'
}

export interface Bracket {
  tournamentId: string;
  type: BracketType;
  isFinished: boolean;
}

interface SingleEliminationBracketMatch {
  matchId: string;
  nextMatchIndex: number | null;
}

interface SingleEliminationBracketRound {
  roundName: string;
  matches: SingleEliminationBracketMatch[];
}

export interface SingleEliminationBracket extends Bracket {
  bracketStructure: SingleEliminationBracketRound[];
  currentRoundIndex?: number;
  numberOfRounds: number;
}
export function isSingleElimination(bracket: Bracket): bracket is SingleEliminationBracket {
  return bracket.type === BracketType.SINGLE_ELIMINATION;
}
