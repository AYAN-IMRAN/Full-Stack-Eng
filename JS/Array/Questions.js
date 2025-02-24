// 1. Convert the given array into a string using toString().  
// 2. Retrieve the element at index -2 using at().  
// 3. Join all elements of the array with a comma using join().  
// 4. Remove the last element from the array using pop().  
// 5. Add an element to the end of the array using push().  
// 6. Remove the first element from the array using shift().  
// 7. Add an element to the beginning of the array using unshift().  
// 8. Delete the third element of the array using delete().  
// 9. Merge two arrays using concat().  
// 10. Copy elements within the array using copyWithin() to shift the second element to the fourth position.  
// 11. Flatten a nested array using flat().  
// 12. Remove the second and third elements using splice().  
// 13. Remove the first element without modifying the original array using toSpliced().  
// 14. Extract the last three elements of the array using slice().

let favNum = [5,10,9,1,true,false]
console.log(favNum.toString()) 


console.log(favNum.at(-2)) // output = true 

console.log(favNum.join('+')) // output = 5+10+9+1+true+false

console.log(favNum.pop()) // output = 
console.log(favNum) //output now = 5, 10, 9, 1, true

console.log(favNum.push("ayan")) 
console.log(favNum) //output now = 5, 10, 9, 1, true, 'ayan'

console.log(favNum.shift()) //output =
console.log(favNum) //output now = 10, 9, 1, true,'ayan'

console.log(favNum.unshift("hello"))
console.log(favNum) //output now = 'hello', 10, 9, 1,true,'ayan'


let flatArr = [[1,2,3] [4,5,6],[7,8,9]]
let myNewArray = flatArr.flat()
console.log(myNewArray) 

let lang = ["Urdu","eng","Arabic","Spanish"]
console.log(lang.splice(1,2))
console.log(lang) //output now = "Urdu","Spanish"


let month = ["jan","feb","April","May","june"]
let newArrayCut = month.toSpliced(0,1)
console.log(newArrayCut);//output 'feb', 'April', 'May', 'june'
console.log(month); // output Orignal :'jan', 'feb', 'April', 'May', 'june'


console.log(month.slice(2,5)) //output :'April', 'May', 'june' 
console.log(month) // output : 'jan', 'feb', 'April', 'May', 'june'

