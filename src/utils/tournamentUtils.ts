import { csgoMatchSettingsModeShortForm, isCSGOMatchSettings } from 'types/MatchSettings';
import { TournamentHub } from 'types/tournaments/TournamentInfo';

export const getTournamentModeShort = (tournamentInfo: TournamentHub) => {
  if (isCSGOMatchSettings(tournamentInfo.matchSettings)) {
    return `${csgoMatchSettingsModeShortForm(tournamentInfo.matchSettings.mode)}`;
  } else {
    return '';
  }
};
