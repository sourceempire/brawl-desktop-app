export type WrapperProps = {
  matchIndex: number;
  roundIndex: number;
  isFinal: boolean;
  isFirstMatch: boolean;
  isMatchOver: boolean;
  isUserInMatch: boolean;
};

export enum MatchOutcome {
  WIN = 'WIN',
  LOSS = 'LOSS',
  DEFAULT = 'DEFAULT'
}
