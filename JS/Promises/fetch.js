//! 🔹 Definition of fetch in JavaScript:
// fetch() is a built-in JavaScript function used to make HTTP requests (like GET, POST, etc.) to servers or APIs to get/send data asynchronously.

// 👉 Ye mostly data fetch karne ke liye use hota hai, especially from REST APIs.

//! 🔑 Key Points:
// 📦 Returns a Promise

// fetch() always returns a Promise

// Matlab aap .then() aur .catch() use kar sakte ho

// 🌐 Used to call APIs or load data

// Server se JSON, text, images ya kuch bhi data lene ke liye.

// 🧾 Default request is GET

// Agar method specify na karein, to by default GET request hoti hai.

// 📥 Use .then() to get response

// Response ko .json() ya .text() mein convert karna padta hai.

// ❌ Handle errors with .catch()

// Agar koi error aaye (e.g. no internet, server down), to .catch() se handle hoti hai.

let data = fetch("https://randomuser.me/api/")
.then(response => response.json())
.then( data => {
    console.log("Data", data)
})
.catch(error => {
console.log("Error" + error)
})