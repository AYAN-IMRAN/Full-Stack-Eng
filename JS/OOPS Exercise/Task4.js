//! OOPS Task 4

// Encapsulation, Polymorphism, Abstraction, and Getters/Setters
// Task 1: Encapsulation Using Getters and Setters
// Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.

class BankAccount{
    _balance
    constructor(balance = 0) {
        this._balance = balance;
        
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0) {
            throw new Error("Balance cannot be negative");
        }
        this._balance = value;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            throw new Error("Insufficient funds");
        }
        this.balance -= amount;

    }

}

let myAccount = new BankAccount()

// myAccount.deposit(1000);
// myAccount.withdraw(2000);
console.log(myAccount.balance); // Output: 4000



// Task 2: Polymorphism with Method Overriding
// Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.

