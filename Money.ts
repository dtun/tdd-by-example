import { Dollar } from '.';
import { Franc } from '.';

export class Money {
  protected amount: number;

  protected className: string;

  constructor(amount: number) {
    this.amount = amount;
  }

  equals(object: any) {
    return this.amount === object.amount && this.className === object.className;
  }

  dollar(amount: number): Money {
    return new Dollar(amount);
  }

  franc(amount: number): Money {
    return new Franc(amount);
  }

  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}
