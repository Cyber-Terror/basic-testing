// Uncomment the code below and write your tests
import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';

jest.mock('./index', () => {
  const originalModule =
    jest.requireActual<typeof import('./index')>('./index');
  return {
    ...originalModule,
    mockOne: jest.fn(() => 1), //спросить чего оно так выдает undefiend
    mockTwo: jest.fn(() => 2),
    mockThree: jest.fn(() => 3),
  };
});

describe('partial mocking', () => {
  afterAll(() => {
    jest.unmock('./index');
  });

  test('mockOne, mockTwo, mockThree should not log into console', () => {
    // Write your test here
    //idk why it doesn't works expect(mockOne()).toBe(1)
    console.log = jest.fn();
    mockOne();
    mockTwo();
    mockThree();
    expect(mockOne).toBeCalled();
    expect(mockOne).toBeCalled();
    expect(mockOne).toBeCalled();
    expect(console.log).toHaveBeenCalledTimes(0);
  });

  test('unmockedFunction should log into console', () => {
    // Write your test here
    console.log = jest.fn();
    unmockedFunction();
    expect(console.log).toHaveBeenCalledWith('I am not mocked');
  });
});
