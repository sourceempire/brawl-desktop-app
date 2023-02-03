import { SimpleDate } from 'types/SimpleDate';
import { getFirstDayOfWeek } from 'utils/localeUtils';

export const CALENDER_HEIGHT = 6;
export const CALENDER_WIDTH = 7;
export const DAY_NAMES = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
export const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export type Month = {
  index: number;
  numberOfDays: number;
  name: string;
  days: Day[];
};

export type Day = {
  index: number;
  name: string;
  date: SimpleDate;
  thisMonth: boolean;
};

export function changeMonth(
  year: number,
  month: number,
  day: number,
  increment: boolean
): SimpleDate {
  if (increment) {
    return new SimpleDate(month === 11 ? year + 1 : year, month === 11 ? 0 : month + 1, day);
  } else {
    return new SimpleDate(month === 0 ? year - 1 : year, month === 0 ? 11 : month - 1, day);
  }
}

export function getMonth(month: number, year: number): Month {
  const days = [];
  const firstDayIndex = getFirstDayIndex(month, year);
  const numberOfDays = getMonthNumberOfDays(month, year);

  const previousMonthsNumberOfDays = getMonthNumberOfDays(
    month === 0 ? 11 : month - 1,
    month === 0 ? year - 1 : year
  );

  for (let row = 0; row < CALENDER_HEIGHT; row++) {
    for (let col = 0; col < CALENDER_WIDTH; col++) {
      const n = row * CALENDER_WIDTH + col;
      let index;
      let date;
      if (n < firstDayIndex) {
        // last month
        index = previousMonthsNumberOfDays - (firstDayIndex - n);
        date = new SimpleDate(year, month - 1, index);
      } else if (n > firstDayIndex + numberOfDays - 1) {
        // next month
        index = n - numberOfDays - firstDayIndex;
        date = new SimpleDate(year, month, index);
      } else {
        // this month
        index = n - firstDayIndex;
        date = new SimpleDate(year, month + 1, index);
      }
      days.push({
        index: index + 1,
        name: DAY_NAMES[col],
        date,
        thisMonth: firstDayIndex <= n && n <= numberOfDays + firstDayIndex - 1
      });
    }
  }

  return {
    index: month,
    numberOfDays: numberOfDays,
    name: MONTH_NAMES[month],
    days: days
  };
}

function getFirstDayIndex(month: number, year: number): number {
  return new Date(year, month).getDay() - getFirstDayOfWeek();
}

function getMonthNumberOfDays(month: number, year: number): number {
  return 32 - new Date(year, month, 32).getDate();
}

// function isLeapMonth(month: Month, year: number): boolean {
//   return month.index === 1 && isLeapYear(year);
// }

// function isLeapYear(year: number): boolean {
//   if (year % 4 !== 0) return false;
//   if (year % 100 === 0) return false;
//   if (year % 400 !== 0) return false;
//   return true;
// }
