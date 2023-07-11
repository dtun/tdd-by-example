import { Expression, Sum, Bank } from '.';

export class Money implements Expression {
  public amount: number;

  public currency?: string;

  constructor(amount?: number, currency?: string) {
    this.amount = amount || 0;
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

  times(multiplier: number): Expression {
    return new Money(this.amount * multiplier, this.currency);
  }

  plus(addend: Expression): Sum {
    return new Sum(this, addend);
  }

  reduce(bank: Bank, to: string): Money {
    const rate = bank.rate(String(this.currency), to);

    return new Money(this.amount / Number(rate), to);
  }
}
