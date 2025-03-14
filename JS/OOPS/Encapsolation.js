
class getbalance {
    #balance; // Declare a private variable

    constructor(balance) {
        this.#balance = balance; // Initialize private balance
    }

    getbalance() {
        console.log(`Your balance is ${this.#balance}`); // Use the private balance
    }
}

let myBalance = new getbalance(1000);
myBalance.getbalance(); // Output: Your balance is 1000






function BankAccount(accountNumber, accountHolderName, balance) {
    let _accountNumber = accountNumber;  // Private variable for account number
    let _accountHolderName = accountHolderName;  // Private variable for account holder name
    let _balance = balance;  // Private variable for balance

    // Function to display account details
    function showAccountDetails() {
        console.log(`Account Number: ${_accountNumber}`);
        console.log(`Account Holder Name: ${_accountHolderName}`);
        console.log(`Balance: ${_balance}`);
    }

    // Function to deposit an amount
    function deposit(amount) {
        _balance += amount;
        showAccountDetails();  // After deposit, show updated details
    }

    // Function to withdraw an amount
    function withdraw(amount) {
        if (_balance >= amount) {
            _balance -= amount;
            showAccountDetails();  // After withdrawal, show updated details
        } else {
            console.log("Insufficient Balance");
        }
    }

    // Expose the deposit and withdraw methods, but not showAccountDetails directly
    return {
        deposit: deposit,
        withdraw: withdraw
    };
}

let myBankAccount = BankAccount("123456", "Ayan", 1000);

myBankAccount.deposit(500); // Output: Account Number: 123456, Account Holder Name:  Ayan, Balance: 1500
myBankAccount.withdraw(2000); // Output: Insufficient Balance



