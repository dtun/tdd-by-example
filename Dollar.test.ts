import { expect, test } from '@jest/globals';
import { Dollar } from './Dollar';

test('multiplication', () => {
  const five = new Dollar(5);

  five.times(2);

  expect(five.amount).toBe(10);
});
