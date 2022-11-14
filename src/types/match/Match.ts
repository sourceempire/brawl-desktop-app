import Game from 'types/Game';
import { CSGOMatchSettings } from 'types/MatchSettings';
import { Team, TeamId } from 'types/team/Team';

export enum MatchType {
  TOURNAMENT = 'tournament'
}

type Score = number;

export type Match = {
  id: string;
  winnerTeamId?: string;
  gameId: Game;
  matchType: MatchType;
  teams?: Team[];
};

export type CSGOMapResult = {
  mapName: string;
  mapWinner?: TeamId;
  score: Record<TeamId, Score>;
};

export enum CSGOMatchStage {
  NOT_STARTED = 'notStarted',
  READY = 'readyCheck',
  VETO = 'veto',
  STARTING_MATCH = 'startingMatch',
  ONGOING = 'ongoing',
  COMPLETE = 'complete'
}

export enum CSGOVetoStatus {
  NOT_STARTED = 'notStarted',
  READY_CHECK = 'readyCheck',
  BANNING_MAPS = 'banningMaps',
  COMPLETED = 'completed'
}

type CSGOMapName = string;

export type CSGOVeto = {
  matchId: string;
  status: CSGOVetoStatus;
  teamToBanMap: TeamId;
  playersReady: Record<TeamId, boolean>;
  bannedMaps: Record<CSGOMapName, boolean>;
  readyCheckTime: number;
  mapBanTime: number;
  readyCheckExpiration: number | null; // EpochMillis
  currentMapBanExpiration: number | null; // EpochMillis
};

export type CSGOMatch = Match & {
  matchSettings: CSGOMatchSettings;
  seriesScore: Record<TeamId, Score>;
  mapsInfo?: CSGOMapResult[];
  matchStage: CSGOMatchStage;
  veto?: CSGOVeto;
  joinLink: string | null;
};

export const isCSGOMatch = (match: Match): match is CSGOMatch => {
  return match.gameId === Game.CSGO;
};
