export enum BracketType {
  SINGLE_ELIMINATION = 'single_elimination',
  SKELETON_BRACKET = 'skeletonbracket'
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
  currentRoundIndex: number;
  numberOfRounds: number;
}
export function isSingleElimination(bracket: Bracket): bracket is SingleEliminationBracket {
  return bracket.type === BracketType.SINGLE_ELIMINATION;
}
export interface SkeletonBracket extends Bracket {
  numberOfTeams: number;
}

export function isSkeletonBracket(bracket: Bracket): bracket is SkeletonBracket {
  return bracket.type === BracketType.SKELETON_BRACKET;
}
