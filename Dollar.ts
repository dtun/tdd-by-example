import { Money } from './Money';

export class Dollar extends Money {
  className = 'Dollar';

  times(multiplier: number) {
    return new Dollar(this.amount * multiplier);
  }
}
