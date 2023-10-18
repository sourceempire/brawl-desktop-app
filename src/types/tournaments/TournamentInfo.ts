import GameId from 'types/Game';
import { MatchSettings } from 'types/MatchSettings';

export interface TournamentHub {
  id: string;
  name: string;
  gameId: GameId;
  gameName: string;
  startTime: string;
  entryFee: number;
  entryFeeCut: number;
  entryFeeCutPercentage: number;
  matchSettings: MatchSettings;
  currentPrizePool: number;
  region: string;
  teamSize: number;
  teamsAllowed: number;
  registrationClosed: boolean;
  imageId: string; // UUID
  registrationCloseTime: string;
  bracketType: string;
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

export type TournamentHubInfoRow = {
  name: string;
  header: string;
  subtext: string;
  Icon: React.ReactNode;
  ref?: React.MutableRefObject<HTMLDivElement> | null;
};
