export interface TournamentInfo {
  id: string;
  name: string;
  game: string;
  gameMode: string;
  time: Date;
  entryFee: number;
  currentPrizePool: number;
  region: string;
  numberOfTeams: number;
  image: string;
}
