export const MILLISECONDS_IN_MINUTE = 60000;
export const MILLISECONDS_IN_HOUR = 3600000;
export const MILLISECONDS_IN_DAY = 86400000;
export const MILLISECONDS_IN_WEEK = 604800000;
export const MILLISECONDS_IN_YEAR = getYearMilliseconds();

function getYearMilliseconds() {
  const now = new Date();
  const currentYear = now.getFullYear();

  const startOfYear = new Date(currentYear, 0, 1); // January 1st of the current year
  const endOfYear = new Date(currentYear + 1, 0, 1); // January 1st of the next year

  const millisecondsInYear = endOfYear.getTime() - startOfYear.getTime();

  return millisecondsInYear;
}

export function getTimeToClosestTimeUnit(
  unit: 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'
): number {
  const now = new Date();
  let nextDate: Date;
  switch (unit) {
    case 'second':
      return 1000 - now.getMilliseconds();
    case 'minute':
      return (60 - now.getSeconds()) * 1000;
    case 'hour':
      return (60 - now.getMinutes()) * 60 * 1000;
    case 'day':
      return (24 - now.getHours()) * 60 * 60 * 1000;
    case 'week':
      return (7 - now.getDay()) * 24 * 60 * 60 * 1000;
    case 'month':
      nextDate = new Date(now.getFullYear(), now.getMonth() + 1, 1);
      return nextDate.getTime() - now.getTime();
    case 'year':
      nextDate = new Date(now.getFullYear() + 1, 0, 1);
      return nextDate.getTime() - now.getTime();
  }
}
