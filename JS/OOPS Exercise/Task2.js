//! OOPS Task 2

// Functional Constructor and Errors
// Task 1: Create a Functional Constructor
// Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".

// class Person {
//     constructor(name){
// this.name = name

//     }
//     greet(){
//         return `Hello, my name is ${this.name}`
//     }
// }

// let person1 = new Person("Ayan");
// console.log(person1.greet()); // Output: Hello, my name is Ayan


//! Task 2: Handle Errors
// Modify the Person constructor to throw an error if the age is not a positive number.

class Person {
    constructor(name, age) {
        if (age <= 0) {
            throw new Error("Age must be a positive number");
        }
        
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and Age is ${this.age}`;
    }
}


let person2 = new Person("Ayan",-1);
console.log(person2.greet());  // output :throw new Error("Age must be a positive number");