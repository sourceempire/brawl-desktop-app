import { useEffect, useState } from 'react';
import {
  MILLISECONDS_IN_DAY,
  MILLISECONDS_IN_HOUR,
  MILLISECONDS_IN_MINUTE,
  MILLISECONDS_IN_WEEK,
  MILLISECONDS_IN_YEAR,
  getFormattedRemainingTime,
  getTimeToClosestTimeUnit
} from 'utils/timeUtils';

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

export const useFormattedRemainingTime = (date: string) => {
  const [formattedTournamentTime, setFormattedTournamentTime] = useState(() =>
    getFormattedRemainingTime(date)
  );

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const updateFormattedRemainingTime = () => {
      const currentFormattedTournamentTime = getFormattedRemainingTime(date);
      setFormattedTournamentTime(currentFormattedTournamentTime);

      const differenceInMilliseconds = parseInt(date, 10) - Date.now();
      const updateInterval = getTimeUpdateInterval(differenceInMilliseconds);

      timeoutId = setTimeout(updateFormattedRemainingTime, updateInterval);
    };

    updateFormattedRemainingTime();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [date]);

  return formattedTournamentTime;
};
