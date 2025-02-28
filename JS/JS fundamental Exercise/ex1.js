//? Exercise 1: Play With Types ✨

//! Task 1:
//! Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".

function stringToNumber(str) {
    let num = Number(str); 
    if (isNaN(num)) {        
        return `Not a number :${num}`;
    } else {
        return num;           
    }
}

console.log(stringToNumber("Ayan"));  // "Not a number"
console.log(stringToNumber("123"));   // 123
console.log(stringToNumber("3.14"));  // 3.14
console.log(stringToNumber(""));      // 0
console.log(stringToNumber("123abc"));// "Not a number"

 
//? Task 2

//! Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.

function inputToBoolean(input){
    return !Boolean(input);


}
console.log(inputToBoolean(true))
console.log(inputToBoolean(false))
console.log(inputToBoolean(""))
console.log(inputToBoolean(0))
console.log(inputToBoolean("hello"))


//? Task 3:

//! Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"

function whatAmI(input){
    if(typeof input === "string"){
return "I'm a String"
    }else if (typeof input === "number"){
        return "I'm a Number"
    }else if (typeof input === "boolean"){
        return "I'm a Boolean"
    }else{
        return "I'm something else"
    }
}

console.log(whatAmI(123))
console.log(whatAmI("Ayan"))
console.log(whatAmI(true))
console.log(whatAmI(null))


//? Task 4:
//!  Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.

function isItTruthy(input) {
    if(input){
        return "It's truthy!"

    }else{
        return "It's falsey!"
    }
    
}

console.log(isItTruthy(1));       // "It's truthy!"
console.log(isItTruthy(0));       // "It's falsey!"
console.log(isItTruthy(false));   // "It's falsey!"
console.log(isItTruthy(true));    // "It's truthy!"
console.log(isItTruthy("hello")); // "It's truthy!"
console.log(isItTruthy(""));      // "It's falsey!"
console.log(isItTruthy(null));    // "It's falsey!"
console.log(isItTruthy(undefined)); // "It's falsey!"
console.log(isItTruthy(NaN));     // "It's falsey!"


