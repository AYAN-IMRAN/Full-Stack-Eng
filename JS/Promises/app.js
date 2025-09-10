//! 🔹 Definition of Promises in JavaScript:
// A Promise in JavaScript is an object that represents the eventual completion (ya failure) of an asynchronous operation and its resulting value.

// In simple words:
// 👉 It's a way to handle async code (like API calls, file reading, timers) without falling into callback hell.

//? 🔑 Key Points:
//! ✅ A Promise has three states:

// Pending – operation chal rahi hai

// Fulfilled – operation successful, result mil gaya

// Rejected – operation fail ho gayi

// 🧠 You can use .then() to handle success and .catch() for errors.

// 🔄 Promises are chainable – you can link multiple .then() calls together.

// 🚀 Useful in situations where tasks take time (jaise API calls, file loading, etc).

// 👀 Promises are more readable and cleaner than nested callbacks.


//? 🔹 resolve() kya hota hai?
// resolve() ka matlab hota hai:
// 👉 "Kaam successful ho gaya!"
// Yeh function call hota hai jab Promise sahi se complete ho jata hai — matlab koi error nahi aayi.

// 🧠 Iska result .then() mein chala jata hai.

//! 🔸 reject() kya hota hai?
// reject() ka matlab hota hai:
// 👉 "Kaam fail ho gaya!"
// Yeh tab call hota hai jab koi problem aayi ho, ya async kaam complete nahi ho paya.

// 🧠 Iska result .catch() mein chala jata hai.

//! 1st Example 

// let promises = new Promise(
//     (resolve, reject) =>{


//         let myDream = true
//         if(myDream === true){
//             resolve("Dreams are beautiful");
//         }
//         else{
//             reject("Dreams are not beautiful");
//         }
//     }
// )

// promises.then((result => {
//     console.log(result);
// })).catch((error => {
//     console.log(error);
// }))


