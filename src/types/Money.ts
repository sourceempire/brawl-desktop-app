export default class Money {
  private moneyString: string; // format 100.00
  private amount: number;
  private cents: number;

  constructor(moneyString: string) {
    this.moneyString = moneyString;
    [this.amount, this.cents] = moneyString.split('.').map((c) => parseInt(c));
    if (this.amount < 0 || this.cents < 0 || this.cents > 99) {
      throw 'Illegal money string';
    }
  }

  lessThan(other: Money): boolean {
    return parseFloat(this.moneyString) < parseFloat(other.moneyString);
  }

  lessOrEqualTo(other: Money): boolean {
    return parseFloat(this.moneyString) <= parseFloat(other.moneyString);
  }

  greaterThan(other: Money): boolean {
    return parseFloat(this.moneyString) > parseFloat(other.moneyString);
  }

  greaterOrEqualTo(other: Money): boolean {
    return parseFloat(this.moneyString) >= parseFloat(other.moneyString);
  }

  toString(): string {
    return this.moneyString;
  }
}
