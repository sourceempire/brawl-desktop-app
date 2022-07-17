export function shiftRight<T>(arr: T[], n: number): T[] {
  const times = n > arr.length ? n % arr.length : n;
  return [...arr.slice(arr.length - times, arr.length), ...arr.slice(0, arr.length - times)];
}

export function shiftLeft<T>(arr: T[], n: number): T[] {
  const times = n > arr.length ? n % arr.length : n;
  return [...arr.slice(times, arr.length), ...arr.slice(0, times)];
}
