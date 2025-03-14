//! OOPS Task 1
// Prototypes in JavaScript
// Task: Prototype Chaining
// Create a constructor function Animal that has a method speak() that return 'Animal speaking'.
// Then create another constructor Dog that inherits from Animal using prototypes.
// The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal.




class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return 'Animal speaking';
    }
}

// Dog constructor function inheriting from Animal
class Dog extends Animal {
    constructor(name) {
        super(name);  
    }
}

// Adding bark method to Dog's prototype
Dog.prototype.bark = function() {
    return 'Woof!';
};


let myDog = new Dog('hello doggie');

// Demonstrating prototype chaining
console.log(myDog.speak());  
console.log(myDog.bark());  
