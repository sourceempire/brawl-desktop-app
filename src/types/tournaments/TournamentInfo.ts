import { MatchSettings } from 'types/MatchSettings';

export interface TournamentHub {
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
  registrationClosed: boolean;
  image: string;
  registrationCloseTime: string;
}

export type Tournament = {
  id: string;
  name: string;
  gameId: string;
  tournamentHubId?: string;
  tournamentNumber: number; // incremented
  teamSize: number;
  startTime: number; // epoch milli
  teamsAllowed: number;
  entranceFee: number;
  bracketType: string; // TODO -> use an enum
  started: boolean;
  locked: boolean;
  canceled: boolean;
  createdAt: number; // epoch milli
  matchSettings: MatchSettings;
};

export type TournamentMatchInfo = {
  matchId: string;
  roundIndex: number;
  roundName: string;
};

export type TournamentMatchHistory = {
  tournamentId: string;
  matchList: TournamentMatchInfo[];
};
