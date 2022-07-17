export type SimpleDateString = `${number}-${number}-${number}`;

export class SimpleDate {
  year: number;
  month: number; // index
  day: number; // day of month

  constructor(string: SimpleDateString);
  constructor(year: number, month: number, day: number);
  constructor(...args: any[]) {
    if (args.length === 1 && typeof args[0] === 'string') {
      [this.year, this.month, this.day] = args[0].split('-').map((n) => parseInt(n));
      this.month -= 1; // to make month an index
    } else if (
      args.length === 3 &&
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number'
    ) {
      this.year = args[0];
      this.month = args[1];
      this.day = args[2];
    } else {
      throw new Error('Illegal invocation of SimpleDate constructor');
    }
  }

  getYear(): number {
    return this.year;
  }

  getMonth(): number {
    return this.month;
  }

  getDay(): number {
    return this.day;
  }

  toString(): SimpleDateString {
    // prettier-ignore
    return `${this.year}-${
             (this.month + 1).toString().padStart(2, '0')}-${
              this.day.toString().padStart(2, '0')}` as SimpleDateString;
  }

  formatString(delimiter = ' / '): string {
    // prettier-ignore
    return `${this.year}${delimiter}${
             (this.month + 1).toString().padStart(2, '0')}${delimiter}${
              this.day.toString().padStart(2, '0')}`;
  }

  addDays(days: number): SimpleDate {
    let day = this.day;
    let month = this.month;
    let year = this.year;

    if (day + days > SimpleDate.getNumberOfDaysInMonth(year, month)) {
      let remainingDays = day + days;
      while (remainingDays > SimpleDate.getNumberOfDaysInMonth(year, month)) {
        remainingDays = remainingDays - SimpleDate.getNumberOfDaysInMonth(year, month);

        if (month === 11) {
          // december
          year += 1;
          month = 0;
        } else {
          month += 1;
        }
      }
      day = remainingDays;
    } else {
      day += days;
    }
    return new SimpleDate(year, month, day);
  }

  getNumberOfDaysInMonth(): number {
    return SimpleDate.getNumberOfDaysInMonth(this.year, this.month);
  }

  static getNumberOfDaysInMonth(year: number, month: number): number {
    return 32 - new Date(year, month, 32).getDate();
  }

  toDate(): Date {
    return new Date(this.toString());
  }

  static today(): SimpleDate {
    const today = new Date();
    return new SimpleDate(today.getFullYear(), today.getMonth(), today.getDate());
  }
}
