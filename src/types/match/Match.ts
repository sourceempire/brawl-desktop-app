import Game from 'types/Game';
import { CSGOMatchSettings } from 'types/MatchSettings';
import { Team, TeamId } from 'types/team/Team';

enum MatchType {
  TOURNAMENT = 'tournament'
}
type Score = number;

export type Match = {
  id: string;
  winnerTeamId?: string;
  gameId: Game;
  matchType: MatchType;
  teams: Team[];
};

export type CSGOMapResult = {
  csgoMap: string;
  mapWinner?: TeamId;
  score: Record<TeamId, Score>;
};

export type CSGOMatch = Match & {
  matchSettings: CSGOMatchSettings;
  seriesScore: Record<TeamId, Score>;
  mapsInfo?: CSGOMapResult[];
};

export const isCSGOMatch = (match: Match): match is CSGOMatch => {
  return match.gameId === Game.CSGO;
};
