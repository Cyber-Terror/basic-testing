// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios');
jest.mock('lodash', () => ({
  //mock to Avoid async problems
  throttle: jest.fn((fn) => fn),
}));

describe('throttledGetDataFromApi', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('should create instance with provided base url', async () => {
    // Write your test here
    const mockGet = jest.fn().mockResolvedValue({ data: {} });
    axios.create = jest.fn().mockReturnValue({ get: mockGet });
    throttledGetDataFromApi('/posts/1');
    jest.runAllTimers();
    expect(axios.create).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    // Write your test here
    const mockGet = jest.fn().mockResolvedValue({ data: {} });
    axios.create = jest.fn().mockReturnValue({ get: mockGet });
    await throttledGetDataFromApi('/posts/1');
    expect(mockGet).toHaveBeenCalledWith('/posts/1');
  });

  test('should return response data', async () => {
    // Write your test here
    const mockData = { title: 'mock title', body: 'mock body' };
    axios.create = jest.fn().mockReturnValue({
      get: jest.fn().mockResolvedValue({ data: mockData }),
    });
    const result = await throttledGetDataFromApi('/posts/1');
    expect(result).toEqual(mockData);
  });
});
