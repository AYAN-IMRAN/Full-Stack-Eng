//? Exercise 3: Array and methods ✨

//! Arrays and Methods
//! Utilise the inbuilt methods of arrays in Javascript to solve the below tasks:

//! Task 1: Array Filtering
// Write a function filterNumbers(arr) that returns only numbers from a mixed array

// let arr = ["hi",123,56,9,5,true,false]

// function filterNumbers(arr){
//     return arr.filter((value) => typeof value === 'number')
    

// }
// console.log(filterNumbers(arr))




//! Task 2: Array Reversal
// Write a function reverseArray(arr) that reverses the array

let arr = ["ayan",10,true,19992,"hi"]
function reverseArray(arr){
    return arr.reverse()
}
    
console.log(reverseArray(arr))








//! Task 3: Find Maximum in an Array
// Write a function findMax(arr) that returns the largest number in the array

let numbers = [12,683,90,0,212,56282]
function findMax(numbers) {
    return Math.max(...numbers)
    
}

console.log(findMax(numbers))


//! Task 4: Remove Duplicates from an Array
// Write a function removeDuplicates(arr) that returns a new array with all duplicates removed

let dub = ["hi", 12,43,12,"hi",true]

function removeDuplicates(){
    return [...new Set(dub)]
}
console.log(removeDuplicates(dub))

//! Task 5: Flatten a Nested Array
// Write a function flattenArray(arr) that takes a nested array and returns a single flattened array

let flatedArray = [12,34,[1,32,5]]
function flattenArray(flatedArray){
    return flatedArray.flat(1)
}
console.log(flattenArray(flatedArray))