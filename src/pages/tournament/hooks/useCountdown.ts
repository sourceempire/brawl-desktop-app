import { useEffect, useState } from 'react';

type TimeUnits = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type Options = {
  updateInterval?: number;
  onCountdownFinish?: () => void;
};

export const useCountdown = (startTime: number, options: Options = {}) => {
  const { updateInterval = 1000, onCountdownFinish } = options;

  const [timeUnits, setTimeUnits] = useState<TimeUnits>(getTimeUnits(getRemainingTime(startTime)));

  useEffect(() => {
    if (!startTime) return;

    const interval = setInterval(() => {
      const timeRemaining = getRemainingTime(startTime);

      if (timeRemaining < 0) {
        clearInterval(interval);
        setTimeUnits({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        onCountdownFinish?.();
        return;
      }

      setTimeUnits(getTimeUnits(timeRemaining));
    }, updateInterval);

    return () => clearInterval(interval);
  }, [onCountdownFinish, startTime, updateInterval]);

  const hasDays = timeUnits.days !== 0;
  const hasHours = hasDays || timeUnits.hours !== 0;
  const hasMinutes = hasHours || timeUnits.minutes !== 0;
  const hasSeconds = hasMinutes || timeUnits.seconds !== 0;

  return { ...timeUnits, hasDays, hasHours, hasMinutes, hasSeconds };
};

function getRemainingTime(startTime: number) {
  return startTime - Date.now();
}

function getTimeUnits(timeRemaining: number) {
  const timeUnits = [
    { name: 'days', denominator: 1000 * 60 * 60 * 24 },
    { name: 'hours', denominator: 1000 * 60 * 60 },
    { name: 'minutes', denominator: 1000 * 60 },
    { name: 'seconds', denominator: 1000 }
  ] as const;

  return timeUnits.reduce((timeUnits, { name, denominator }) => {
    timeUnits[name] = Math.floor(timeRemaining / denominator);
    timeRemaining -= timeUnits[name] * denominator;
    return timeUnits;
  }, {} as TimeUnits);
}
