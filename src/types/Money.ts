/**
 * Represents a monetary amount in a currency, holding the value in minor units (e.g., cents) for precise integer arithmetic.
 *
 * - Major units: The whole number portion of the amount (e.g., dollars, euros).
 * - Minor units: The fractional part of the amount (e.g., cents), where 100 minor units equal 1 major unit.
 * - Total minor units: The entire amount represented in minor units.
 *
 * Usage:
 * const amount = new Money(150);  // 150 minor units, equivalent to 1 major unit and 50 minor units (e.g., $1.50).
 * const formattedAmount = amount.format();  // Returns a string formatted as "1.50"
 */
export default class Money {
  private totalMinorUnits: number;
  private majorUnits: number;
  private minorUnits: number;

  constructor(totalMinorUnits: number) {
    if (totalMinorUnits < 0) {
      throw new Error('Illegal money amount: negative value not allowed');
    }
    this.totalMinorUnits = totalMinorUnits;
    this.majorUnits = Math.floor(totalMinorUnits / 100);
    this.minorUnits = totalMinorUnits % 100;
  }

  lessThan(amount: Money): boolean {
    return this.totalMinorUnits < amount.totalMinorUnits;
  }

  lessOrEqualTo(amount: Money): boolean {
    return this.totalMinorUnits <= amount.totalMinorUnits;
  }

  greaterThan(amount: Money): boolean {
    return this.totalMinorUnits > amount.totalMinorUnits;
  }

  greaterOrEqualTo(amount: Money): boolean {
    return this.totalMinorUnits >= amount.totalMinorUnits;
  }

  format(): string {
    return `${this.majorUnits}.${this.minorUnits.toString().padStart(2, '0')}`;
  }

  toString(): string {
    return this.totalMinorUnits.toString();
  }
}
