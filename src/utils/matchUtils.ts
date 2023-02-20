import { CSGOGameModes, CSGOSeriesType } from 'types/MatchSettings';

export const csgoMatchSettingsModeShortForm = (mode: CSGOGameModes) => {
  return {
    [CSGOGameModes.COMPETITIVE]: '5v5',
    [CSGOGameModes.WINGMAN]: '2v2',
    [CSGOGameModes.ONE_VS_ONE]: '1v1'
  }[mode];
};

export const csgoMatchSettingsSeriesTypeLongForm = (type: CSGOSeriesType) => {
  return {
    [CSGOSeriesType.BO1]: 'Best of 1',
    [CSGOSeriesType.BO2]: 'Best of 2',
    [CSGOSeriesType.BO3]: 'Best of 3'
  }[type];
};
