import Game, { GameId } from 'types/Game';
import { CSGOMatchSettings } from 'types/MatchSettings';
import { Team, TeamId } from 'types/team/Team';
import { UserId } from 'types/user/User';

type Score = number;

export type Match = {
  id: string;
  winner?: TeamId;
  gameId: Game;
  team1: Team;
  team2: Team;
};

export enum CSGOTeamSide {
  T = 't',
  CT = 'ct'
}

export enum CSGORoundEndReason {
  DEFUSE = 'bombDefused',
  EXPLODE = 'bombExploded',
  ELIMINATION = 'elimination',
  TIME = 'timeout'
}

export type CSGORoundResult = {
  winner: TeamId;
  side: CSGOTeamSide;
  reason: CSGORoundEndReason;
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
  matchStage: CSGOMatchStage;
  veto?: CSGOVeto;
  serverAddress: string | null;
};

export type MockGameMatch = Match & {
  gameId: GameId.MOCK;
};

export type PlayerStats = {
  assists: number;
  bombDefuses: number;
  bombPlants: number;
  deaths: number;
  headshotKills: number;
  kills: number;
  mvp: number;
  teamKills: number;
};

export type TeamStats = {
  score: Score;
  players: Record<UserId, PlayerStats>;
};

export type MapStats = {
  mapName: CSGOMapName;
  winner?: TeamId;
  teams: Record<TeamId, TeamStats>;
};

export type MatchStats = {
  winner?: TeamId;
  gameId: string;
  maps: MapStats[];
};

export type RoundWin = {
  mapIndex: number;
  matchId: string;
  reason: CSGORoundEndReason;
  roundIndex: 0;
  side: CSGOTeamSide;
  winner: string;
};

export const isMockMatch = (match: Match): match is MockGameMatch => {
  return match.gameId === Game.MOCK;
};

export const isCSGOMatch = (match: Match): match is CSGOMatch => {
  return match.gameId === Game.CSGO;
};
