import Game, { GameId } from 'types/Game';
import { Team, TeamId } from 'types/team/Team';

export type Match = {
  id: string;
  winnerTeamId: TeamId;
  gameId: Game;
  team1: Team;
  team2: Team;
  type: string;
};

export type MockGameMatch = Match & {
  gameId: GameId.MOCK;
  hasGameData: boolean;
  loserTeamId: TeamId;
  scoreToWin?: number;
};

export const isMockMatch = (match: Match): match is MockGameMatch => {
  return match.gameId === Game.MOCK;
};
