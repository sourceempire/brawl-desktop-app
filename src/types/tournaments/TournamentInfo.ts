import { MatchSettings } from 'types/MatchSettings';

export interface TournamentInfo {
  id: string;
  name: string;
  gameId: string;
  gameName: string;
  startTime: string;
  entranceFee: string;
  matchSettings: MatchSettings;
  currentPrizePool: string;
  region: string;
  teamSize: number;
  teamsAllowed: number;
  lockTime: number;
  registrationClosed: boolean;
  image: string;
}
