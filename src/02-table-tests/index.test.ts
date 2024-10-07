// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 10, b: 5, action: Action.Add, expected: 15 },
  { a: 10, b: -5, action: Action.Add, expected: 5 },
  { a: 0, b: -5, action: Action.Add, expected: -5 },
  { a: 1.25, b: -5, action: Action.Add, expected: -3.75 },
  { a: 10, b: 5, action: Action.Subtract, expected: 5 },
  { a: 10, b: -5, action: Action.Subtract, expected: 15 },
  { a: 0, b: -5, action: Action.Subtract, expected: 5 },
  { a: 2.55, b: -5, action: Action.Subtract, expected: 7.55 },
  { a: 10, b: 5, action: Action.Multiply, expected: 50 },
  { a: 10, b: -5, action: Action.Multiply, expected: -50 },
  { a: 10, b: 2.5, action: Action.Multiply, expected: 25 },
  { a: 10, b: -2.5, action: Action.Multiply, expected: -25 },
  { a: 0, b: -5, action: Action.Multiply, expected: -0 },
  { a: 10, b: 0, action: Action.Multiply, expected: 0 },
  { a: 10, b: 0, action: Action.Multiply, expected: 0 },
  { a: 10, b: 5, action: Action.Divide, expected: 2 },
  { a: 10, b: -5, action: Action.Divide, expected: -2 },
  { a: 10, b: 2.5, action: Action.Divide, expected: 4 },
  { a: 10, b: -2.5, action: Action.Divide, expected: -4 },
  { a: 10, b: 0, action: Action.Exponentiate, expected: 1 },
  { a: 0, b: 5, action: Action.Exponentiate, expected: 0 },
  { a: null, b: null, action: undefined, expected: null },
  {
    a: 5,
    b: 3,
    action: !(
      Action.Add ||
      Action.Subtract ||
      Action.Multiply ||
      Action.Divide ||
      Action.Exponentiate
    ),
    expected: null,
  },
  { a: null, b: null, action: Action.Add, expected: null },
  { a: 'a', b: 'b', action: Action.Add, expected: null },
  { a: 'a', b: 5, action: Action.Add, expected: null },
  { a: 10, b: '5', action: Action.Add, expected: null },
  { a: null, b: null, action: Action.Subtract, expected: null },
  { a: 'a', b: 'b', action: Action.Subtract, expected: null },
  { a: 'a', b: 5, action: Action.Subtract, expected: null },
  { a: 10, b: '5', action: Action.Subtract, expected: null },
  { a: null, b: null, action: Action.Multiply, expected: null },
  { a: 'a', b: 'b', action: Action.Multiply, expected: null },
  { a: 'a', b: 5, action: Action.Multiply, expected: null },
  { a: 10, b: '5', action: Action.Multiply, expected: null },
  { a: null, b: null, action: Action.Divide, expected: null },
  { a: 'a', b: 'b', action: Action.Divide, expected: null },
  { a: 'a', b: 5, action: Action.Divide, expected: null },
  { a: 10, b: '5', action: Action.Divide, expected: null },
  { a: null, b: null, action: Action.Exponentiate, expected: null },
  { a: 'a', b: 'b', action: Action.Exponentiate, expected: null },
  { a: 'a', b: 5, action: Action.Exponentiate, expected: null },
  { a: 10, b: '5', action: Action.Exponentiate, expected: null },
  { a: 10, b: '5', action: undefined, expected: null },

  // continue cases for other actions
];
const testCasesToBeCloseTo = [
  { a: 10, b: 0, action: Action.Divide, expected: Infinity },
  { a: 0, b: -5, action: Action.Divide, expected: -0 },
  { a: 10, b: -5, action: Action.Exponentiate, expected: 1e-5 },
  { a: 10, b: -2.5, action: Action.Exponentiate, expected: 0.003162 },
  { a: 10, b: 2.5, action: Action.Exponentiate, expected: 316.23 },
  { a: 0, b: -5, action: Action.Exponentiate, expected: Infinity },
]

describe('simpleCalculator', () => {
  // This test case is just to run this test suite, remove it when you write your own tests

  test.each(testCases)
    (`should return $expected when called with $a, $b and action $action`,
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    }
  );
  test.each(testCasesToBeCloseTo)
    (`should toBeCloseTo`,
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBeCloseTo(expected);
    }
  );
  // Consider to use Jest table tests API to test all cases above
});
