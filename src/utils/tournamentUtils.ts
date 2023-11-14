import { TournamentHub } from 'types/tournaments/TournamentInfo';
import {
  MILLISECONDS_IN_DAY,
  MILLISECONDS_IN_HOUR,
  MILLISECONDS_IN_MINUTE,
  MILLISECONDS_IN_WEEK
} from './timeUtils';
import { isMockMatchSettings } from 'types/MatchSettings';
import { matchSettingsModeShortForm, matchSettingsSeriesTypeLongForm } from './matchUtils';

export const getTournamentModeShort = (tournamentInfo: TournamentHub) => {
  if (isMockMatchSettings(tournamentInfo.gameId)) {
    return `${matchSettingsModeShortForm(tournamentInfo.teamSize)}`;
  } else {
    return '';
  }
};

export const getTournamentSeriesTypeLong = (tournamentInfo: TournamentHub) => {
  if (isMockMatchSettings(tournamentInfo.gameId)) {
    return `${matchSettingsSeriesTypeLongForm(tournamentInfo.teamSize)}`;
  } else {
    return '';
  }
};

export const formatTimeDifference = (
  differenceInMilliseconds: number,
  startMonth: number,
  startYear: number
): string => {
  const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'always' });

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
    return formatter.format(differenceInSeconds, 'second');
  } else if (differenceInMilliseconds < MILLISECONDS_IN_HOUR) {
    return formatter.format(differenceInMinutes, 'minute');
  } else if (differenceInMilliseconds < MILLISECONDS_IN_DAY) {
    return formatter.format(differenceInHours, 'hour');
  } else if (differenceInMilliseconds < MILLISECONDS_IN_WEEK) {
    return formatter.format(differenceInDays, 'day');
  } else if (differenceInMilliseconds < MILLISECONDS_IN_WEEK * 4) {
    return formatter.format(differenceInWeeks, 'week');
  } else if (differenceInYears < 1) {
    return formatter.format(differenceInMonths, 'month');
  } else {
    return formatter.format(differenceInYears, 'year');
  }
};
