/**
 * To determine MatchSettings sub-type in runtime, a __type property is used
 */
export interface MatchSettings {
  __type: string;
}

export enum MatchSettingsTypes {
  CSGO = 'csgo'
}

export interface CSGOMatchSettings extends MatchSettings {
  __type: MatchSettingsTypes.CSGO;
  mode: CSGOGameModes;
  seriesType: CSGOSeriesType;
  maps?: string[];
}

export enum CSGOGameModes {
  COMPETITIVE = 'competitive',
  WINGMAN = 'wingman',
  ONE_VS_ONE = 'one_vs_one'
}

export enum CSGOSeriesType {
  BO1 = 'bo1',
  BO2 = 'bo2',
  BO3 = 'bo3'
}

/**
 * Type Guard for CSGOMatchSettings
 */
export function isCSGOMatchSettings(settings: MatchSettings): settings is CSGOMatchSettings {
  return settings.__type === MatchSettingsTypes.CSGO;
}
