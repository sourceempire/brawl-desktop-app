export type WrapperProps = {
  matchIndex: number;
  roundIndex: number;
  isFinal: boolean;
  isFirstMatch: boolean;
  isThirdPlaceMatch?: boolean;
  matchOutcome: MatchOutcome | null;
};

export enum MatchOutcome {
  Win = 'Win',
  Loss = 'Loss',
  NotDecided = 'NotDecided'
}
