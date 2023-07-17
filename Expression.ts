import { Money, Bank } from '.';

export interface Expression {
  reduce(bank: Bank, to: string): Money;

  plus(addend: Expression): Expression;

  equals(object: any): boolean;

  times(multiplies: number): Expression;
}
