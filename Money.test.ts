import { expect, test } from '@jest/globals';
import { Money } from '.';

test('multiplication', () => {
  const dollar = new Money(0, 'USD');

  expect(dollar.dollar(5).times(2).equals(dollar.dollar(10))).toBe(true);
  expect(dollar.dollar(5).times(3).equals(dollar.dollar(15))).toBe(true);

  const franc = new Money(0, 'CHF');

  expect(franc.franc(5).times(2).equals(franc.franc(10))).toBe(true);
  expect(franc.franc(5).times(3).equals(franc.franc(15))).toBe(true);
});

test('equality', () => {
  const money = new Money(0, 'USD');

  expect(money.dollar(5).equals(money.dollar(5))).toBe(true);
  expect(money.dollar(5).equals(money.dollar(6))).toBe(false);
  expect(money.dollar(6).equals(money.dollar(6))).toBe(true);
  expect(money.dollar(6).equals(money.dollar(5))).toBe(false);
});
