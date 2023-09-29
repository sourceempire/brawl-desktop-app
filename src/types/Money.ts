export default class Money {
  private money: number;
  private amount: number;
  private cents: number;

  constructor(money: number) {
    this.money = money;
    this.amount = Math.floor(money / 100);
    this.cents = money % 100;
    if (this.amount < 0 || this.cents < 0 || this.cents > 99) {
      throw 'Illegal money string';
    }
  }

  lessThan(other: Money): boolean {
    return this.money < other.money;
  }

  lessOrEqualTo(other: Money): boolean {
    return this.money <= other.money;
  }

  greaterThan(other: Money): boolean {
    return this.money > other.money;
  }

  greaterOrEqualTo(other: Money): boolean {
    return this.money >= other.money;
  }

  format(): string {
    return `${this.amount}.${this.cents.toString().padStart(2, '0')}`;
  }

  toString(): string {
    return this.money.toString();
  }
}
