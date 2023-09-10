/**
 * Formats a number to a specific money format.
 * Example: Converts 10000 to "€100,00".
 *
 * @param number - The number to be formatted.
 * @returns The formatted money string.
 * @throws Will throw an error if the provided value is not a number.
 */
export function formatMoney(money: number): string {
  // Check if the provided value is a number.
  if (typeof money !== 'number') {
    throw new Error('The provided value is not a number');
  }

  // Calculate the integer part of the money. For 10000, it would be 100.
  const integerPart: number = Math.floor(money / 100);

  // Calculate the decimal part of the money. For 10000, it would be 00.
  const decimalPart: number = money % 100;

  // Return the formatted string. If decimal part is less than 10, add a leading '0'.
  return `€${integerPart},${decimalPart < 10 ? '0' + decimalPart : decimalPart}`;
}
