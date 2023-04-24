export type WrapperProps = {
  matchIndex: number;
  roundIndex: number;
  isFinal: boolean;
  isFirstMatch: boolean;
  isMatchOver: boolean;
  isUserInMatch?: boolean;
};

export enum MatchOutcome {
  Win = 'Win',
  Loss = 'Loss'
}
