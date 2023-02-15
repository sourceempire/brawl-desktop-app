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

export function csgoMatchSettingsModeShortForm(mode: CSGOGameModes) {
  switch (mode) {
    case CSGOGameModes.COMPETITIVE:
      return '5v5';
    case CSGOGameModes.WINGMAN:
      return '2v2';
    case CSGOGameModes.ONE_VS_ONE:
      return '1v1';
    default:
      return mode;
  }
}

export function csgoMatchSettingsSeriesTypeLongForm(type: CSGOSeriesType) {
  switch (type) {
    case CSGOSeriesType.BO1:
      return 'Best of 1';
    case CSGOSeriesType.BO2:
      return 'Best of 2';
    case CSGOSeriesType.BO3:
      return 'Best of 3';
    default:
      return type;
  }
}

/**
 * Type Guard for CSGOMatchSettings
 */
export function isCSGOMatchSettings(settings: MatchSettings): settings is CSGOMatchSettings {
  return settings.__type === MatchSettingsTypes.CSGO;
}
