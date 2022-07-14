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
  seriesType: string;
}

export enum CSGOGameModes {
  COMPETITIVE = 'competitive',
  WINGMAN = 'wingman',
  ONE_VS_ONE = 'one_vs_one'
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

/**
 * Type Guard for CSGOMatchSettings
 */
export function isCSGOMatchSettings(settings: MatchSettings): settings is CSGOMatchSettings {
  return settings.__type === MatchSettingsTypes.CSGO;
}
