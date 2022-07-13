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
  mode: string;
  seriesType: string;
}

export function csgoMatchSettingsModeShortForm(longForm: string) {
  switch (longForm) {
    case 'competitive':
      return '5v5';
    case 'wingman':
      return '2v2';
    case 'one_vs_one':
      return '1v1';
    default:
      return longForm;
  }
}

/**
 * Type Guard for CSGOMatchSettings
 */
export function isCSGOMatchSettings(settings: MatchSettings): settings is CSGOMatchSettings {
  return settings.__type === MatchSettingsTypes.CSGO;
}
