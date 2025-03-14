//! Simple Function 
// A simple function is one that is defined with the `function` keyword. It takes parameters and performs an operation.
function add(num1, num2) { // num1, num2 are parameters
    return num1 + num2; // This function returns the sum of num1 and num2
}

console.log(add(5, 10)); // 5, 10 are arguments. We pass these to the function when calling it. The output will be 15.



//! Arrow Function 
// Arrow functions provide a shorter syntax for writing functions. 
let multiply = (a, b) => { // (a, b) are parameters
    return a * b; // This function returns the result of a multiplied by b
}

console.log(multiply(5, 10)); // Arguments 5 and 10 are passed to the function. The output will be 50.



//! IIFE (Immediately Invoked Function Expression)
// An IIFE is a function that is defined and invoked immediately. It's used when you want to run a function right away without having to call it separately.
// This pattern is often used to create a local scope and avoid polluting the global namespace.
(
    () => {
        console.log("Hello world"); // This will log "Hello world" immediately after the function is defined.
    }
)(); // The semicolon here is important to mark the end of the function expression.


//! Anonymous Function 
// An anonymous function is simply a function that doesn't have a name. You can use anonymous functions, for example, when passing them as arguments to other functions or assigning them to variables.
let minus = () => {
    return 10 - 5; // This function subtracts 5 from 10
}

console.log(minus()); // Calling the anonymous function will output 5.


 
//! Higher-Order Function
// A higher-order function is a function that either takes one or more functions as arguments, returns a function, or both. These are very useful for abstracting behavior in your code.
function add(a, b) {
    console.log(a + b); // This function logs the sum of a and b
}

function minus(a, b) {
    console.log(a - b); // This function logs the result of a minus b
}

function HigherOrderFunc(a, b, func) {
    // This is a higher-order function. It takes another function (func) as an argument and calls it.
    func(a, b); // Here, func is the function passed to HigherOrderFunc.
}

// Passing the 'add' function as an argument to HigherOrderFunc
HigherOrderFunc(10, 20, add); // Output will be 30

// Passing the 'minus' function as an argument to HigherOrderFunc
HigherOrderFunc(20, 10, minus); // Output will be 10
