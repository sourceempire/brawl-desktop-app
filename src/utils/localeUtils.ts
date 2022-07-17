export function getLocale(): string {
  return new Intl.DateTimeFormat().resolvedOptions().locale;
}

export function getFirstDayOfWeek(): number {
  return (new Intl.Locale(getLocale()) as any).weekInfo.firstDay;
}
