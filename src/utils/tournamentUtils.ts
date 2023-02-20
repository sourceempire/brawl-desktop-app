import { isCSGOMatchSettings } from 'types/MatchSettings';
import { TournamentHub } from 'types/tournaments/TournamentInfo';
import {
  csgoMatchSettingsModeShortForm,
  csgoMatchSettingsSeriesTypeLongForm
} from 'utils/matchUtils';

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
