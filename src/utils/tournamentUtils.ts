import { CSGOGameModes, CSGOSeriesType, isCSGOMatchSettings } from 'types/MatchSettings';
import { TournamentHub } from 'types/tournaments/TournamentInfo';

export const getTournamentModeShort = (tournamentInfo: TournamentHub) => {
  if (isCSGOMatchSettings(tournamentInfo.matchSettings)) {
    return `${csgoMatchSettingsModeShortForm(tournamentInfo.matchSettings.mode)}`;
  } else {
    return '';
  }
};

export const getTournamentSeriesTypeLong = (tournamentInfo: TournamentHub) => {
  if (isCSGOMatchSettings(tournamentInfo.matchSettings)) {
    return `${csgoMatchSettingsSeriesTypeLongForm(tournamentInfo.matchSettings.seriesType)}`;
  } else {
    return '';
  }
};

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
