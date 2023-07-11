import { expect, test } from '@jest/globals';
import { Money, Bank, Sum } from '.';

const money = new Money();
const bank = new Bank();

test('addition', () => {
  const five = money.dollar(5);
  const sum = new Sum(five, money.dollar(5));
  const reduced = bank.reduce(sum, 'USD');

  expect(reduced.equals(money.dollar(10))).toBe(true);
});

test('reduce', () => {
  const result = bank.reduce(money.dollar(1), 'USD');

  expect(result.equals(money.dollar(1))).toBe(true);
});

test('conversion', () => {
  bank.addRate('CHF', 'USD', 2);

  const result = bank.reduce(money.franc(2), 'USD');

  expect(result.equals(money.dollar(1))).toBe(true);
});

test('multiplication', () => {
  expect(money.dollar(5).times(2).equals(money.dollar(10))).toBe(true);
  expect(money.dollar(5).times(3).equals(money.dollar(15))).toBe(true);
  expect(money.dollar(5).times(3).equals(money.franc(15))).toBe(false);
  expect(money.franc(5).times(2).equals(money.franc(10))).toBe(true);
  expect(money.franc(5).times(3).equals(money.franc(15))).toBe(true);
  expect(money.franc(5).times(3).equals(money.dollar(15))).toBe(false);
});

test('equality', () => {
  expect(money.dollar(5).equals(money.dollar(5))).toBe(true);
  expect(money.dollar(5).equals(money.dollar(6))).toBe(false);
  expect(money.franc(6).equals(money.dollar(6))).toBe(false);
});
