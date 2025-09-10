//! With FUnction Example 
// let api = fetch("https://jsonplaceholder.typicode.com/posts")

// function getData(response) {
//     return response.json()
//     .then(data => console.log(data))
//     .catch(Error => console.log(Error))

// }
// api.then(getData)
// api.catch(getData)


//! without Function example 
let api = fetch("https://jsonplaceholder.typicode.com/posts")
.then(Response => Response.json())
.then(data => console.log(data))
.catch(Error => console.log(Error))