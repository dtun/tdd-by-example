import { Expression } from '.';

export class Bank {
  reduce(source: Expression, to: string) {
    return source.reduce(to);
  }
}
