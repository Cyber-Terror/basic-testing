// Uncomment the code below and write your tests
import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';
import { existsSync } from 'fs';
import { readFile } from 'fs/promises';
import { join } from 'path';

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    // Write your test here
    const callBack = jest.fn();
    jest.spyOn(global, 'setTimeout');
    doStuffByTimeout(callBack, 2000);
    expect(setTimeout).toHaveBeenCalledWith(callBack, 2000);
  });

  test('should call callback only after timeout', () => {
    // Write your test here
    const callBack = jest.fn();
    doStuffByTimeout(callBack, 2000);
    expect(callBack).not.toBeCalled();
    jest.advanceTimersByTime(2000);
    expect(callBack).toBeCalledTimes(1);
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    // Write your test here
    const callBack = jest.fn();
    jest.spyOn(global, 'setInterval');
    doStuffByInterval(callBack, 2000);
    expect(setInterval).toHaveBeenCalledWith(callBack, 2000);
  });

  test('should call callback multiple times after multiple intervals', () => {
    // Write your test here
    const callBack = jest.fn();
    doStuffByInterval(callBack, 2000);
    expect(callBack).not.toBeCalled();
    jest.advanceTimersByTime(2000);
    jest.advanceTimersByTime(2000);
    jest.advanceTimersByTime(2000);
    jest.advanceTimersByTime(2000);
    expect(callBack).toBeCalledTimes(4);
  });
});

jest.mock('fs');
jest.mock('fs/promises');
jest.mock('path');

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    // Write your test here
    const mockPath = 'file.txt';
    (join as jest.Mock).mockReturnValue('mock/full/path/toFile/file.txt');
    await readFileAsynchronously(mockPath);
    expect(join).toHaveBeenCalledWith(__dirname, mockPath);
  });

  test('should return null if file does not exist', async () => {
    // Write your test here
    const mockPath = 'file.txt';
    (join as jest.Mock).mockReturnValue('mock/full/path/toFile/file.txt');
    (existsSync as jest.Mock).mockReturnValue(false);
    const result = await readFileAsynchronously(mockPath);
    expect(result).toBeNull();
  });

  test('should return file content if file exists', async () => {
    // Write your test here
    const mockPath = 'file.txt';
    const mockFullPath = 'mock/full/path/toFile/file.txt';
    (join as jest.Mock).mockReturnValue(mockFullPath);
    (existsSync as jest.Mock).mockReturnValue(true);
    (readFile as jest.Mock).mockResolvedValue(Buffer.from('file content'));
    const result = await readFileAsynchronously(mockPath);
    expect(result).toBe('file content');
  });
});
