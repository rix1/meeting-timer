import { timeToString } from './formatTime';

test('it handles hours', () => {
  expect(timeToString(1 * 60 * 60)).toBe('01:00:00');
  expect(timeToString(12 * 60 * 60)).toBe('12:00:00');
});

test('it handles minutes', () => {
  expect(timeToString(2 * 60)).toBe('00:02:00');
  expect(timeToString(59 * 60)).toBe('00:59:00');
  expect(timeToString(60 * 60)).toBe('01:00:00');
});

test('it handles seconds', () => {
  expect(timeToString(60)).toBe('00:01:00');
  expect(timeToString(59)).toBe('00:00:59');
});
