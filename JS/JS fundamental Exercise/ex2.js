//? Exercise 2: Play With Variables ✨

//? Task:
//! Perform the following mathematical operations
//! on the provided variables a and b

// Add
// Subtract
// Multiply
// Divide
// Increment
// Decrement
// Reminder


// **** DO NOT CHANGE the values *****
const a = 18;
const b = 24;

// Addition of two values
function add(a,b) {
    return a + b;
}

// Subtract small value from larger one
function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

// Divide larger value by small
function divide() {
    return a / b;
}

// Increase value of a by 1
function increment(a) {
    return a + 1;
}

// Decrease value of b by 1
function decrement(b) {
    return b - 1;
}

// Find the remainder when dividing larger value by smaller value
function reminder(a, b) {
    return a % b;
}

// Performing the operations
console.log("Addition:", add(a, b));  // 18 + 24 = 42
console.log("Subtraction:", subtract(a, b));  // 18 - 24 = -6
console.log("Multiplication:", multiply(a, b));  // 18 * 24 = 432
console.log("Division:", divide(a, b));  // 18 / 24 = 0.75
console.log("Increment a:", increment(a));  // 18 + 1 = 19
console.log("Decrement b:", decrement(b));  // 24 - 1 = 23
console.log("Remainder:", reminder(a, b));  // 18 % 24 = 18