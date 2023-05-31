import { isCSGOMatchSettings } from 'types/MatchSettings';
import { TournamentHub } from 'types/tournaments/TournamentInfo';
import {
  csgoMatchSettingsModeShortForm,
  csgoMatchSettingsSeriesTypeLongForm
} from 'utils/matchUtils';
import {
  MILLISECONDS_IN_DAY,
  MILLISECONDS_IN_HOUR,
  MILLISECONDS_IN_MINUTE,
  MILLISECONDS_IN_WEEK
} from './timeUtils';

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

export const getFormattedRemainingTime = (tournamentInfo: TournamentHub) => {
  const currentTimestamp = Date.now();
  const startTime = new Date(tournamentInfo.startTime).getTime();
  const startMonth = new Date(tournamentInfo.startTime).getMonth() + 1;
  const startYear = new Date(tournamentInfo.startTime).getFullYear();
  const differenceInMilliseconds = startTime - currentTimestamp;

  if (currentTimestamp >= startTime) {
    return 'Started';
  }

  // ADD RETURN FOR WHEN ALL TOURNAMENTS FOR THE HUB HAVE ENDED

  return formatTimeDifference(differenceInMilliseconds, startMonth, startYear);
};

const formatTimeDifference = (
  differenceInMilliseconds: number,
  startMonth: number,
  startYear: number
): string => {
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'always' });

  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const yearDifference = startYear - currentYear;

  const differenceInSeconds = Math.ceil(differenceInMilliseconds / 1000);
  const differenceInMinutes = Math.ceil(differenceInSeconds / 60);
  const differenceInHours = Math.ceil(differenceInMinutes / 60);
  const differenceInDays = Math.ceil(differenceInHours / 24);
  const differenceInWeeks = Math.ceil(differenceInDays / 7);

  let differenceInMonths;

  if (startYear - currentYear === 0) {
    differenceInMonths = startMonth - currentMonth;
  } else {
    differenceInMonths = 12 - currentMonth + 12 * (yearDifference - 1) + startMonth; // Adding 12 months for every full year that is in between current year and start month
  }

  const differenceInYears =
    startYear - currentYear > 0 && differenceInMonths > 12
      ? Math.floor(differenceInMonths / 12)
      : 0;

  if (differenceInMilliseconds < MILLISECONDS_IN_MINUTE) {
    return rtf.format(differenceInSeconds, 'second');
  } else if (differenceInMilliseconds < MILLISECONDS_IN_HOUR) {
    return rtf.format(differenceInMinutes, 'minute');
  } else if (differenceInMilliseconds < MILLISECONDS_IN_DAY) {
    return rtf.format(differenceInHours, 'hour');
  } else if (differenceInMilliseconds < MILLISECONDS_IN_WEEK) {
    return rtf.format(differenceInDays, 'day');
  } else if (differenceInMilliseconds < MILLISECONDS_IN_WEEK * 4) {
    return rtf.format(differenceInWeeks, 'week');
  } else if (differenceInYears < 1) {
    return rtf.format(differenceInMonths, 'month');
  } else {
    return rtf.format(differenceInYears, 'year');
  }
};
