//! Write a JS  program to find maximum between two numbers. 

// let a = 12
// let b = 15

// if( a > b ){
//     console.log(a + " is greater than " + b)
// }else{
//     console.log(b + " is greater than " + a)
// }

// ! Write a JS  program to find maximum between three numbers.
// let a = 12
// let b = 15
// let c = 20

// if( (a > b)  && (a > c) ){
//     console.log(a + " is greater than ");
// }else if((b > a)  && (b > c)){
//     console.log(b + " is greater than ");
// }
// else if((c > a)  && (c > a)){
//     console.log(b + " is greater than ");
// }
// else{
//     console.log("all are equal")
// }

//! Write a JS  program to check whether a number is negative, positive or zero.

// let a = -12
// if(a > 0){
//     console.log(a + " is positive");
// }else{
//     console.log(a + " is negetive")
// }

//! Write a JS  program to check whether a number is divisible by 5 and 11 or not.
// let a = 111
// if(a % 5 == 0 && a % 11 == 0){
//     console.log(a + " is divisible by 5 and 11");
// }else{
//     console.log(a + " is not divisible by 5 and 11");
// }

//! Write a JS  program to check whether a number is even or odd.
// let a = 5
// if(a % 2 == 0){
//     console.log(a + " is even");
// }else{
//     console.log(a + " is odd");
// }

//! Write a JS  program to check whether a year is leap year or not.
// let a = 2020
// if(a % 4 == 0 && a % 100 != 0 || a % 400 == 0){
//     console.log(a + " is leap year");
// }else{
//     console.log(a + " is not leap year");
// }

//! Write a JS  program to check whether a character is alphabet or not.
// let a = "a"
// if(a >= 'a' && a <= 'z'){
//     console.log(a + " is alphabet");
// }else{
//     console.log(a + " is not alphabet");
// }

// function isAlphabet(char) {
//     // Get the ASCII code of the character
//     let code = char.charCodeAt(0);

//     // Check if the character is between 'A' and 'Z' (uppercase) or 'a' and 'z' (lowercase)
//     if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//         console.log(char + " is an alphabet.");
//     } else {
//         console.log(char + " is not an alphabet.");
//     }
// }

// // Example usage
// isAlphabet('a');  // Output: a is an alphabet.
// isAlphabet('1');  // Output: 1 is not an alphabet.
// isAlphabet('B');  // Output: B is an alphabet.
// isAlphabet('@');  // Output: @ is not an alphabet.

//!Write a JS  program to input any alphabet and check whether it is vowel or consonant

// let a = "a"
// if(a = 'a' && a = 'e' && a = 'i' && a = 'o' && a = 'u'){
//     console.log(a + " is vowel");
// }else{
//      console.log(a + " is  consonant ");
// }

//! Write a JS  program to input any character and check whether it is alphabet, digit or special character.

// let a = "@"
// if(a >= 'a' && a <= 'z'){
//     console.log(a + " is alphabhet");
// }else if(a >= 0 ){
//      console.log(a + " is  digit ");
// }else{
//     console.log(a + " is  special character ");
// }

//! Write a JS  program to check whether a character is uppercase or lowercase alphabet.
// let a = "a"
// if (a >= 'A' && a <= 'Z') {
//     console.log(a + " is uppercase alphabet");
// }else{
//     console.log(a + " is lowercase alphabet");
// }

//! Write a JS  program to input week number and print week day.
// let a = 7;

// if (a === 1) {
//     console.log("Day name is Sunday");
// } else if (a === 2) {
//     console.log("Day name is Monday");
// } else if (a === 3) {
//     console.log("Day name is Tuesday");
// } else if (a === 4) {
//     console.log("Day name is Wednesday");
// } else if (a === 5) {
//     console.log("Day name is Thursday");
// } else if (a === 6) {
//     console.log("Day name is Friday");
// } else if (a === 7) {
//     console.log("Day name is Saturday");
// } else {
//     console.log("Invalid day");
// }

//! Write a JS  program to input month number and print number of days in that month.
// let month = 5; // Example: Input the month number (1 = January, 2 = February, ..., 12 = December)

// if (month === 1) {
//     console.log("January has 31 days");
// } else if (month === 2) {
//     console.log("February has 28 or 29 days (leap year)");
// } else if (month === 3) {
//     console.log("March has 31 days");
// } else if (month === 4) {
//     console.log("April has 30 days");
// } else if (month === 5) {
//     console.log("May has 31 days");
// } else if (month === 6) {
//     console.log("June has 30 days");
// } else if (month === 7) {
//     console.log("July has 31 days");
// } else if (month === 8) {
//     console.log("August has 31 days");
// } else if (month === 9) {
//     console.log("September has 30 days");
// } else if (month === 10) {
//     console.log("October has 31 days");
// } else if (month === 11) {
//     console.log("November has 30 days");
// } else if (month === 12) {
//     console.log("December has 31 days");
// } else {
//     console.log("Invalid month number");
// }