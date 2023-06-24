export class Money {
  protected amount: number;

  protected currency: string;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  equals(object: any) {
    return this.amount === object.amount && this.currency === object.currency;
  }

  dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }
}
