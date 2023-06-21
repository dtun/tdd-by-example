import { expect, test } from '@jest/globals';
import { Dollar } from './Dollar';

test('multiplication', () => {
  expect(new Dollar(5).times(2).equals(new Dollar(10))).toBe(true);
  expect(new Dollar(5).times(3).equals(new Dollar(15))).toBe(true);
});

test('equality', () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
  expect(new Dollar(6).equals(new Dollar(6))).toBe(true);
});
