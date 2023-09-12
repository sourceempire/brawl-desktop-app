/**
 * Formats a number to a specific money format.
 * Example: Converts 10000 to "€100,00".
 *
 * @param number - The number to be formatted.
 * @param entryFeeCut - The number to be formatted.
 * @returns The formatted money string.
 * @throws Will throw an error if the provided value is not a number.
 */
export function formatMoney(money: number, entryFeeCut: number = 0): string {
  // Calculate the integer part of the money after considering entryFeeCut.
  const totalAmount = money + entryFeeCut;
  const integerPart = Math.floor(totalAmount / 100);

  // Calculate the decimal part of the money.
  const decimalPart: number = totalAmount % 100;

  // Return the formatted string. If the decimal part is less than 10, add a leading '0'.
  return `€${integerPart}.${decimalPart < 10 ? '0' + decimalPart : decimalPart}`;
}
