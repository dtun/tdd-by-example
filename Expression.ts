import { Money, Bank } from '.';

export interface Expression {
  reduce(bank: Bank, to: string): Money;

  plus(addend: Expression): Expression;
}
