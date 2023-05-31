import { useEffect, useState } from 'react';
import { TournamentHub } from 'types/tournaments/TournamentInfo';
import {
  MILLISECONDS_IN_DAY,
  MILLISECONDS_IN_HOUR,
  MILLISECONDS_IN_MINUTE,
  MILLISECONDS_IN_WEEK,
  MILLISECONDS_IN_YEAR,
  getTimeToClosestTimeUnit
} from 'utils/timeUtils';
import { getFormattedRemainingTime } from 'utils/tournamentUtils';

const getTimeUpdateInterval = (differenceInMilliseconds: number) => {
  if (differenceInMilliseconds < MILLISECONDS_IN_MINUTE) {
    return getTimeToClosestTimeUnit('second');
  } else if (differenceInMilliseconds < MILLISECONDS_IN_HOUR) {
    return getTimeToClosestTimeUnit('minute');
  } else if (differenceInMilliseconds < MILLISECONDS_IN_DAY) {
    return getTimeToClosestTimeUnit('hour');
  } else if (differenceInMilliseconds < MILLISECONDS_IN_WEEK) {
    return getTimeToClosestTimeUnit('day');
  } else if (differenceInMilliseconds < MILLISECONDS_IN_WEEK * 4) {
    return getTimeToClosestTimeUnit('week');
  } else if (differenceInMilliseconds < MILLISECONDS_IN_YEAR) {
    return getTimeToClosestTimeUnit('month');
  } else {
    return getTimeToClosestTimeUnit('year');
  }
};

export const useFormattedRemainingTime = (tournamentHub: TournamentHub) => {
  const [formattedTournamentTime, setFormattedTournamentTime] = useState(() =>
    getFormattedRemainingTime(tournamentHub)
  );

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const updateFormattedRemainingTime = () => {
      const currentFormattedTournamentTime = getFormattedRemainingTime(tournamentHub);
      setFormattedTournamentTime(currentFormattedTournamentTime);

      const differenceInMilliseconds = parseInt(tournamentHub.startTime, 10) - Date.now();
      const updateInterval = getTimeUpdateInterval(differenceInMilliseconds);

      timeoutId = setTimeout(updateFormattedRemainingTime, updateInterval);
    };

    updateFormattedRemainingTime();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [tournamentHub]);

  return formattedTournamentTime;
};
