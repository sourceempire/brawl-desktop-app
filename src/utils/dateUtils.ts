export const getTimeSince = (date: Date) => {
  const getSuffix = (count: number) => {
    return count === 1 ? '' : 's';
  };

  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

  const days = seconds / 86400;
  if (days > 1) {
    const dayCount = Math.floor(days);
    return `${dayCount} day${getSuffix(dayCount)} ago`;
  }
  const hours = seconds / 3600;
  if (hours > 1) {
    const hourCount = Math.floor(hours);
    return `${hourCount} hour${getSuffix(hourCount)} ago`;
  }
  const minutes = seconds / 60;
  if (minutes > 1) {
    const minuteCount = Math.floor(minutes);
    return `${minuteCount} minute${getSuffix(minuteCount)} ago`;
  }
  if (seconds > 10) {
    return 'less than a minute ago';
  }
  return 'a few seconds ago';
};
