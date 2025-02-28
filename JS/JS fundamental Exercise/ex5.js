// Exercise 5: Nested Functions and Context ✨

// Task 1: Using this in Objects
// Create an object person with a method introduce() that uses this
// additionally add properties of name & age that will result in Hi, my name is Hitesh and I am 19.5 years old on calling introduce()

let person = {
    name: 'Ayan',
    age: 17.9,
    introduce: function() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age}`)
    }
}

person.introduce(); // Output: Hi, my name is Ayan and I am 17.9


//! Task 2: Function within a function
// Write a function outer() that contains another function inner() and returns a value of 'Inner function called' on calling outer()

function outer() {
    function inner(){
        return 'Hi Im inner function'
    }
    return inner();
}

console.log(outer()); // Output: Hi Im inner function


