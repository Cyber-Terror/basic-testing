// Uncomment the code below and write your tests
import { getBankAccount } from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    // Write your test here
    const testBankAccount = getBankAccount(400);
    expect(testBankAccount.getBalance()).toEqual(400);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    // Write your test here
    const amount = 200;
    const testBankAccount = getBankAccount(amount);
    expect(() => {
      testBankAccount.withdraw(250);
    }).toThrowError(`Insufficient funds: cannot withdraw more than ${amount}`);
  });

  test('should throw error when transferring more than balance', () => {
    // Write your test here
    const amount = 200;
    const fromBankAccount = getBankAccount(amount);
    const toBankAccount = getBankAccount(0);
    expect(() => {
      fromBankAccount.transfer(250, toBankAccount);
    }).toThrowError(`Insufficient funds: cannot withdraw more than ${amount}`);
  });

  test('should throw error when transferring to the same account', () => {
    // Write your test here
    const fromBankAccount = getBankAccount(200);
    expect(() => {
      fromBankAccount.transfer(250, fromBankAccount);
    }).toThrowError(`Transfer failed`);
  });

  test('should deposit money', () => {
    // Write your test here
    const testBankAccount = getBankAccount(200);
    testBankAccount.deposit(150);
    expect(testBankAccount.getBalance()).toBe(350);
  });

  test('should withdraw money', () => {
    // Write your test here
    const testBankAccount = getBankAccount(200);
    testBankAccount.withdraw(190);
    expect(testBankAccount.getBalance()).toBe(10);
  });

  test('should transfer money', () => {
    // Write your test here
    const fromBankAccount = getBankAccount(200);
    const toBankAccount = getBankAccount(200);
    fromBankAccount.transfer(200, toBankAccount);
    expect(fromBankAccount.getBalance()).toBe(0);
    expect(toBankAccount.getBalance()).toBe(400);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
    const account = getBankAccount(0);
    jest.spyOn(account,'fetchBalance').mockResolvedValue(50);
    const fetchBalance = await account.fetchBalance();
    expect(typeof fetchBalance).toBe('number');
    expect(fetchBalance).toBeGreaterThan(0);
    expect(fetchBalance).toBeLessThan(100);
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
   
    const account = getBankAccount(0);
    jest.spyOn(account,'fetchBalance').mockResolvedValue(50);
    await account.synchronizeBalance();
    expect(account.getBalance()).toBe(50);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
    const account= getBankAccount(0);
    jest.spyOn(account,'fetchBalance').mockResolvedValue(null);
    await expect(account.synchronizeBalance()).rejects.toThrowError('Synchronization failed');
  });
});
