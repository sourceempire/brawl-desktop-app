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

export const getTournamentStartDays = (tournamentInfo: TournamentHub) => {
  const currentTimestamp = Date.now();
  const startTime = parseInt(tournamentInfo.startTime, 10);
  const differenceInMilliseconds = startTime - currentTimestamp;
  const differenceInDays = Math.floor(differenceInMilliseconds / 86400000); // Number indicates milliseconds of a day
  const differenceInWeeks = Math.floor(differenceInMilliseconds / 604800000); // Number indicates milliseconds of a week
  const differenceInHours = Math.floor(differenceInMilliseconds / 3600000); // Number indicates milliseconds of an hour

  if (currentTimestamp >= startTime) {
    return 'Started';
  }

  // ADD RETURN FOR WHEN ALL TOURNAMENTS FOR THE HUB HAVE ENDED

  if (differenceInMilliseconds < 86400000) {
    if (differenceInHours <= 0) {
      return `In ${differenceInHours} minutes`;
    } else if (differenceInHours === 1) {
      return `In 1 hour`;
    } else {
      return `In ${differenceInHours} hours`;
    }
  } else if (differenceInMilliseconds < 604800000) {
    if (differenceInDays === 0) {
      return 'Today';
    } else if (differenceInDays === 1) {
      return 'In 1 day';
    } else {
      return `In ${differenceInDays} days`;
    }
  } else if (differenceInWeeks === 1) {
    return 'In 1 week';
  } else if (differenceInWeeks <= 52) {
    return `In ${differenceInWeeks} weeks`;
  } else {
    return `More than a year`;
  }
};
