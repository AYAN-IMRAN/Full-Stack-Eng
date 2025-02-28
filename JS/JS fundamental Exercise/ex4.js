//? Exercise 4: Loops ✨

//! Task 1: Sum of First N Natural Numbers
// Write a function sumOfN(n) that returns the sum of the first n natural numbers

function sumOfN(n) {
  let sum = 0; // Initialize sum to 0
  for (let i = 1; i <= n; i++) {
    sum += i; // Add each number to the sum
  }
  return sum; // Return the final sum
}

console.log(sumOfN(10)); // Output: 55

//! Dry Run
//! Step 1: Initialize Variables
// n = 10 (This is the input to the function)
// sum = 0 (Sum starts at 0)
// i (loop counter, starts from 1)
// Step 2: Enter the for loop
// The loop runs from i = 1 to i = 10, inclusive.

// Iteration 1 (i = 1):
// sum = 0 + 1 = 1
// i = 2
// Iteration 2 (i = 2):
// sum = 1 + 2 = 3
// i = 3
// Iteration 3 (i = 3):
// sum = 3 + 3 = 6
// i = 4
// Iteration 4 (i = 4):
// sum = 6 + 4 = 10
// i = 5
// Iteration 5 (i = 5):
// sum = 10 + 5 = 15
// i = 6
// Iteration 6 (i = 6):
// sum = 15 + 6 = 21
// i = 7
// Iteration 7 (i = 7):
// sum = 21 + 7 = 28
// i = 8
// Iteration 8 (i = 8):
// sum = 28 + 8 = 36
// i = 9
// Iteration 9 (i = 9):
// sum = 36 + 9 = 45
// i = 10
// Iteration 10 (i = 10):
// sum = 45 + 10 = 55
// i = 11 (Now the loop stops because i > 10)

//! Task 2: Multiplication Table
// Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4

let result = "";
function printMultiplicationTable(n) {
  for (let i = 1; i <= n; i++) {
    result += `${n} x ${i} = ${n * i}\n`; // Use \n for a new line
  }
  return result;
}
console.log(printMultiplicationTable(10));

//! Task 3: Count Vowels in a String
// Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.

function countVowels(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (
      char.toLowerCase() === "a" ||
      char.toLowerCase() === "e" ||
      char.toLowerCase() === "i" ||
      char.toLowerCase() === "o" ||
      char.toLowerCase() === "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("hello ayan"));



//! Dry Run:
// Initialization:

// str = "hello ayan" (The input string)
// count = 0 (Initial vowel count)
// First Iteration (i = 0):

// char = str[0] = "h" (The first character of the string is "h")
// We check if "h" is a vowel:
// "h".toLowerCase() is "h", and it is not a vowel.
// The counter count remains 0.
// Second Iteration (i = 1):

// char = str[1] = "e" (The second character of the string is "e")
// We check if "e" is a vowel:
// "e".toLowerCase() is "e", and it is a vowel.
// The counter count increases by 1: count = 1.
// Third Iteration (i = 2):

// char = str[2] = "l" (The third character of the string is "l")
// We check if "l" is a vowel:
// "l".toLowerCase() is "l", and it is not a vowel.
// The counter count remains 1.
// Fourth Iteration (i = 3):

// char = str[3] = "l" (The fourth character of the string is "l")
// We check if "l" is a vowel:
// "l".toLowerCase() is "l", and it is not a vowel.
// The counter count remains 1.
// Fifth Iteration (i = 4):

// char = str[4] = "o" (The fifth character of the string is "o")
// We check if "o" is a vowel:
// "o".toLowerCase() is "o", and it is a vowel.
// The counter count increases by 1: count = 2.
// Sixth Iteration (i = 5):

// char = str[5] = " " (The sixth character of the string is a space " ")
// We check if " " is a vowel:
// " ".toLowerCase() is " ", and it is not a vowel.
// The counter count remains 2.
// Seventh Iteration (i = 6):

// char = str[6] = "a" (The seventh character of the string is "a")
// We check if "a" is a vowel:
// "a".toLowerCase() is "a", and it is a vowel.
// The counter count increases by 1: count = 3.
// Eighth Iteration (i = 7):

// char = str[7] = "y" (The eighth character of the string is "y")
// We check if "y" is a vowel:
// "y".toLowerCase() is "y", and it is not a vowel.
// The counter count remains 3.
// Ninth Iteration (i = 8):

// char = str[8] = "a" (The ninth character of the string is "a")
// We check if "a" is a vowel:
// "a".toLowerCase() is "a", and it is a vowel.
// The counter count increases by 1: count = 4.
// Tenth Iteration (i = 9):

// char = str[9] = "n" (The tenth character of the string is "n")
// We check if "n" is a vowel:
// "n".toLowerCase() is "n", and it is not a vowel.
// The counter count remains 4.
// End of the loop:

// The loop finishes because i = 10 is no longer less than str.length = 10.
// Return:

// After finishing the loop, the function returns the value of count, which is 4.