import { Money } from '.';

export class Franc extends Money {
  className = 'Franc';

  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
