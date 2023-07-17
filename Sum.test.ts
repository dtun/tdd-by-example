import { expect, test } from '@jest/globals';
import { Money, Bank, Sum, Expression } from '.';

const money = new Money();
const bank = new Bank();

test('multiplication', () => {
  const fiveBucks: Expression = money.dollar(5);
  const tenFrancs: Expression = money.franc(10);
  bank.addRate('CHF', 'USD', 2);
  const sum = new Sum(fiveBucks, tenFrancs).times(2);
  const result = bank.reduce(sum, 'USD');

  expect(result.equals(money.dollar(20))).toBe(true);
});
