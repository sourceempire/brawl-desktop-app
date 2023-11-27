import GameId from './Game';

/**
 * To determine MatchSettings sub-type in runtime, a gameId property is used
 */
export interface MatchSettings {
  gameId: string;
}

/**
 * Type Guard for MockMatchSettings
 */
export function isMockMatchSettings(gameId: GameId) {
  return gameId === GameId.MOCK;
}
