import { Money } from '.';

export class Franc extends Money {
  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier, 'CHF');
  }
}
