export enum GameId {
  CSGO = '4747a477-3445-4b0a-9db9-bf0e68238208',
  MOCK = 'e65080ad-79d6-48dc-9887-55344225d119'
}

export const GameName = {
  [GameId.CSGO]: 'Counter Strike GO',
  [GameId.MOCK]: 'Mock Game'
};

export enum GameTag {
  CSGO = 'CSGO',
  MOCK = 'MOCK'
}

export default GameId;
