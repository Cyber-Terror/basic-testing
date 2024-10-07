// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 10, b: 5, action: Action.Add })).toBe(15);
    expect(simpleCalculator({ a: 10, b: -5, action: Action.Add })).toBe(5);
    expect(simpleCalculator({ a: 0, b: -5, action: Action.Add })).toBe(-5);
    expect(
      simpleCalculator({ a: 1.25, b: -5, action: Action.Add }),
    ).toBeCloseTo(-3.75);
  });

  test('should subtract two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 10, b: 5, action: Action.Subtract })).toBe(5);
    expect(simpleCalculator({ a: 10, b: -5, action: Action.Subtract })).toBe(
      15,
    );
    expect(simpleCalculator({ a: 0, b: -5, action: Action.Subtract })).toBe(5);
    expect(
      simpleCalculator({ a: 2.55, b: -5, action: Action.Subtract }),
    ).toBeCloseTo(7.55);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 10, b: 5, action: Action.Multiply })).toBe(50);
    expect(simpleCalculator({ a: 10, b: -5, action: Action.Multiply })).toBe(
      -50,
    );
    expect(simpleCalculator({ a: 10, b: 2.5, action: Action.Multiply })).toBe(
      25,
    );
    expect(simpleCalculator({ a: 10, b: -2.5, action: Action.Multiply })).toBe(
      -25,
    );
    expect(simpleCalculator({ a: 0, b: -5, action: Action.Multiply })).toBe(-0);
    expect(simpleCalculator({ a: 10, b: 0, action: Action.Multiply })).toBe(0);
  });

  test('should divide two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 10, b: 5, action: Action.Divide })).toBe(2);
    expect(simpleCalculator({ a: 10, b: -5, action: Action.Divide })).toBe(-2);
    expect(simpleCalculator({ a: 10, b: 2.5, action: Action.Divide })).toBe(4);
    expect(simpleCalculator({ a: 10, b: -2.5, action: Action.Divide })).toBe(
      -4,
    );
    expect(simpleCalculator({ a: 10, b: 0, action: Action.Divide })).toBe(
      Infinity,
    );
    expect(simpleCalculator({ a: 0, b: -5, action: Action.Divide })).toBe(-0);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 10, b: 5, action: Action.Exponentiate })).toBe(
      100000,
    );
    expect(simpleCalculator({ a: 5, b: 10, action: Action.Exponentiate })).toBe(
      9765625,
    );
    expect(
      simpleCalculator({ a: 10, b: -5, action: Action.Exponentiate }),
    ).toBeCloseTo(1e-5);
    expect(
      simpleCalculator({ a: 10, b: -2.5, action: Action.Exponentiate }),
    ).toBeCloseTo(0.003162);
    expect(
      simpleCalculator({ a: 10, b: 2.5, action: Action.Exponentiate }),
    ).toBeCloseTo(316.23);
    expect(simpleCalculator({ a: 0, b: -5, action: Action.Exponentiate })).toBe(
      Infinity,
    );
    expect(simpleCalculator({ a: 10, b: 0, action: Action.Exponentiate })).toBe(
      1,
    );
    expect(simpleCalculator({ a: 0, b: 5, action: Action.Exponentiate })).toBe(
      0,
    );
  });

  test('should return null for invalid action', () => {
    // Write your test here
    expect(simpleCalculator({ a: null, b: null, action: null })).toBeNull();
    expect(
      simpleCalculator({
        a: 5,
        b: 3,
        action: !(
          Action.Add ||
          Action.Subtract ||
          Action.Multiply ||
          Action.Divide ||
          Action.Exponentiate
        ),
      }),
    ).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    expect(
      simpleCalculator({ a: null, b: null, action: Action.Add }),
    ).toBeNull();
    expect(simpleCalculator({ a: 'a', b: 'b', action: Action.Add })).toBeNull();
    expect(simpleCalculator({ a: 'a', b: 5, action: Action.Add })).toBeNull();
    expect(simpleCalculator({ a: 10, b: 'b', action: Action.Add })).toBeNull();

    expect(
      simpleCalculator({ a: null, b: null, action: Action.Subtract }),
    ).toBeNull();
    expect(
      simpleCalculator({ a: 'a', b: 'b', action: Action.Subtract }),
    ).toBeNull();
    expect(
      simpleCalculator({ a: 'a', b: 5, action: Action.Subtract }),
    ).toBeNull();
    expect(
      simpleCalculator({ a: 10, b: 'b', action: Action.Subtract }),
    ).toBeNull();

    expect(
      simpleCalculator({ a: null, b: null, action: Action.Multiply }),
    ).toBeNull();
    expect(
      simpleCalculator({ a: 'a', b: 'b', action: Action.Multiply }),
    ).toBeNull();
    expect(
      simpleCalculator({ a: 'a', b: 5, action: Action.Multiply }),
    ).toBeNull();
    expect(
      simpleCalculator({ a: 10, b: 'b', action: Action.Multiply }),
    ).toBeNull();

    expect(
      simpleCalculator({ a: null, b: null, action: Action.Divide }),
    ).toBeNull();
    expect(
      simpleCalculator({ a: 'a', b: 'b', action: Action.Divide }),
    ).toBeNull();
    expect(
      simpleCalculator({ a: 'a', b: 5, action: Action.Divide }),
    ).toBeNull();
    expect(
      simpleCalculator({ a: 10, b: 'b', action: Action.Divide }),
    ).toBeNull();

    expect(
      simpleCalculator({ a: null, b: null, action: Action.Exponentiate }),
    ).toBeNull();
    expect(
      simpleCalculator({ a: 'a', b: 'b', action: Action.Exponentiate }),
    ).toBeNull();
    expect(
      simpleCalculator({ a: 'a', b: 5, action: Action.Exponentiate }),
    ).toBeNull();
    expect(
      simpleCalculator({ a: 10, b: 'b', action: Action.Exponentiate }),
    ).toBeNull();
    expect(simpleCalculator({ a: 10, b: 'b', action: null })).toBeNull();
  });
});
