import { expect, test } from '@jest/globals';
import { Franc } from './Franc';

test('multiplication', () => {
  expect(new Franc(5).times(2).equals(new Franc(10))).toBe(true);
  expect(new Franc(5).times(3).equals(new Franc(15))).toBe(true);
});

test('equality', () => {
  expect(new Franc(5).equals(new Franc(5))).toBe(true);
  expect(new Franc(6).equals(new Franc(6))).toBe(true);
});
