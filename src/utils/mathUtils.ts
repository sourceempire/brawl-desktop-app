export function random(min: number, max: number | undefined) {
  if (max === undefined) {
    max = min;
    return Math.floor(Math.random() * max);
  } else {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
