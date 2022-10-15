import { useCallback, useEffect, useState } from 'react';
import { Days, Hours, Minutes, Number, Seconds, Unit, Wrapper } from './CountDown.styles';

type Props = {
  startTime: number;
};

type Units = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const CountDown = ({ startTime }: Props) => {
  const [units, setUnits] = useState<Units>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const updateUnits = useCallback(() => {
    const timeDifference = startTime - Date.now();

    const days = getDays(timeDifference);
    const hours = getHours(timeDifference);
    const minutes = getMinutes(timeDifference);
    const seconds = getSeconds(timeDifference);

    setUnits({
      days,
      hours,
      minutes,
      seconds
    });
  }, [startTime]);

  useEffect(() => {
    if (!startTime || startTime - Date.now() < 0) return;

    updateUnits();
    const interval = setInterval(() => updateUnits(), 1000);
    return () => clearInterval(interval);
  }, [startTime, updateUnits]);

  function filterDayNumbersPredicate(dayNumber: string, index: number) {
    switch (index) {
      case 0:
        return dayNumber !== '0';
      case 1:
        return dayNumber !== '0' || units.days > 9;
      case 2:
        return dayNumber !== '0' && units.days !== 0;
      default:
        return false;
    }
  }

  const hasDays = units.days !== 0;
  const hasHours = hasDays || units.hours !== 0;
  const hasMinutes = hasHours || units.minutes !== 0;
  const hasSeconds = hasMinutes || units.seconds !== 0;

  return (
    <Wrapper>
      {hasDays && (
        <Unit>
          <Days>
            {padZeroes(units.days, 2)
              .split('')
              .filter((d, index) => filterDayNumbersPredicate(d, index))
              .map((d, index) => (
                <Number key={index}>{d}</Number>
              ))}
          </Days>
          <div>Days</div>
        </Unit>
      )}

      {hasHours && (
        <Unit>
          <Hours>
            {padZeroes(units.hours, 1)
              .split('')
              .map((h, index) => (
                <Number key={index}>{h}</Number>
              ))}
          </Hours>
          <div>Hours</div>
        </Unit>
      )}

      {hasMinutes && (
        <Unit>
          <Minutes>
            {padZeroes(units.minutes, 1)
              .split('')
              .map((h, index) => (
                <Number key={index}>{h}</Number>
              ))}
          </Minutes>
          <div>Minutes</div>
        </Unit>
      )}

      {hasSeconds ? (
        <Unit>
          <Seconds>
            {padZeroes(units.seconds, 1)
              .split('')
              .map((h, index) => (
                <Number key={index}>{h}</Number>
              ))}
          </Seconds>
          <div>Seconds</div>
        </Unit>
      ) : (
        /**TODO -> make something happen when time runs out */
        <div>Time ran out</div>
      )}
    </Wrapper>
  );
};

export default CountDown;

const dayDenominator = 1000 * 60 * 60 * 24;
const hourDenominator = 1000 * 60 * 60;
const minuteDenominator = 1000 * 60;
const secondDenominator = 1000;

function getDays(timeDifference: number) {
  return Math.floor(timeDifference / dayDenominator);
}

function getHours(timeDifference: number) {
  const flooredDaysInMillis = getDays(timeDifference) * dayDenominator;
  const daysRemoved = timeDifference - flooredDaysInMillis;
  return Math.floor(daysRemoved / hourDenominator);
}

function getMinutes(timeDifference: number) {
  const flooredDaysInMillis = getDays(timeDifference) * dayDenominator;
  const flooredHoursInMillis = getHours(timeDifference) * hourDenominator;
  const hoursRemoved = timeDifference - flooredDaysInMillis - flooredHoursInMillis;
  return Math.floor(hoursRemoved / minuteDenominator);
}

function getSeconds(timeDifference: number) {
  const flooredDaysInMillis = getDays(timeDifference) * dayDenominator;
  const flooredHoursInMillis = getHours(timeDifference) * hourDenominator;
  const flooredMinutesInMillis = getMinutes(timeDifference) * minuteDenominator;
  const minutesRemoved =
    timeDifference - flooredDaysInMillis - flooredHoursInMillis - flooredMinutesInMillis;
  return Math.floor(minutesRemoved / secondDenominator);
}

function padZeroes(number: number, zeroCount: number) {
  return (Array(zeroCount).fill('0').join('') + number).slice(-(zeroCount + 1));
}
