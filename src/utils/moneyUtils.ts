/**
 * Converts a number into a formatted currency string with a specific format.
 * The function is primarily designed for the Euro (€) currency.
 * Example: Converts 10000 into "€100,00".
 *
 * @param buyInCents - The value in cents to be formatted as currency.
 * @param feeInCents - Additional fee in cents to be added to the original amount.
 * @returns A string representing the formatted currency.
 * @throws Will throw an error if the provided value is not a number.
 */
export function formatCentsToCurrency(buyInCents: number, feeInCents: number = 0): string {
  // Calculate the total amount after adding the fee.
  const totalAmountInCents = buyInCents + feeInCents;

  // Split the total amount into euros and cents parts.
  const euros = Math.floor(totalAmountInCents / 100);
  const cents = totalAmountInCents % 100;

  // Format the cents part. If it's less than 10, add a leading '0' to make it two digits.
  const formattedCents = cents < 10 ? '0' + cents : cents.toString();

  // Return the formatted currency string.
  return `€${euros}.${formattedCents}`;
}
