
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  let greatestBalanceAccount = [];

  for (let account of array) {
    if (account.balance <= 0) {
      continue;
    } else if (greatestBalanceAccount.length === 0) {
      greatestBalanceAccount[0] = account;
    } else if (account.balance > greatestBalanceAccount[0].balance) {
      greatestBalanceAccount[0] = account;
    }
  }

  return greatestBalanceAccount;

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
