import { Expression, Pair } from '.';

export class Bank {
  rates: Map<number, number> = new Map();

  reduce(source: Expression, to: string) {
    return source.reduce(this, to);
  }

  addRate(from: string, to: string, rate: number) {
    this.rates.set(new Pair(from, to).hashCode(), rate);
  }

  rate(from: string, to: string) {
    if (from === to) return 1;

    return this.rates.get(new Pair(from, to).hashCode());
  }
}
