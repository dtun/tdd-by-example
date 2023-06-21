import { Money } from './Money';

export class Franc extends Money {
  className = 'Franc';

  times(multiplier: number) {
    return new Franc(this.amount * multiplier);
  }
}
