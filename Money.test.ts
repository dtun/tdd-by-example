import { expect, test } from '@jest/globals';
import { Money } from '.';

test('multiplication', () => {
  const money = new Money();

  expect(money.dollar(5).times(2).equals(money.dollar(10))).toBe(true);
  expect(money.dollar(5).times(3).equals(money.dollar(15))).toBe(true);
  expect(money.dollar(5).times(3).equals(money.franc(15))).toBe(false);
  expect(money.franc(5).times(2).equals(money.franc(10))).toBe(true);
  expect(money.franc(5).times(3).equals(money.franc(15))).toBe(true);
  expect(money.franc(5).times(3).equals(money.dollar(15))).toBe(false);
});

test('equality', () => {
  const money = new Money();

  expect(money.dollar(5).equals(money.dollar(5))).toBe(true);
  expect(money.dollar(5).equals(money.dollar(6))).toBe(false);
  expect(money.franc(6).equals(money.dollar(6))).toBe(false);
});
