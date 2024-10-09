// Uncomment the code below and write your tests
 import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    // Write your test here
    const testList= ['a','b','c','d']
    const expectedOutput = {
      value: 'a',
      next: {
        value: 'b',
        next: {
          value: 'c',
          next: {
            value: 'd',
            next: {
              value: null,
              next: null,
            },
          },
        },
      },
    };
    expect(generateLinkedList(testList)).toStrictEqual(expectedOutput);
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    // Write your test here
    const testData = [1,2,3,4,5,6];
    expect(generateLinkedList(testData)).toMatchSnapshot()
  });
});
