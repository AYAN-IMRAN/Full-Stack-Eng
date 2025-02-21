//!collection of data 
// !Similler type of data contain in one var
//! Array ek collection hai data ka, jisme hum similar ya same type ke elements ko ek hi variable mein store kar sakte hain.


let freinds = ["Ayan" ,"Aman","Danish","Hamza",true ,10 ]
// console.log(freinds);

// for(let i = 0;i <freinds.length; i++){
//     console.log(freinds[i]);
// }

console.log(freinds.length);

//! Step-by-Step Explanation:
//? Initialization: Loop mein i = 0 set hota hai, iska matlab hai hum first element ko access karenge.

//? Condition Check: i < freinds.length check hota hai. Is case mein freinds.length = 6, toh pehle iteration mein i = 0 hai, jo 0 < 6 hai, isliye condition true hai.

//? Printing: Loop ke andar console.log(freinds[i]); hota hai, jo current value of i ke corresponding array ka element print karta hai.

//? First Iteration (i = 0): freinds[0] = "Ayan". Isliye "Ayan" print hoga.
//? Second Iteration (i = 1): freinds[1] = "Aman". Isliye "Aman" print hoga.
//? Third Iteration (i = 2): freinds[2] = "Danish". Isliye "Danish" print hoga.
//? Fourth Iteration (i = 3): freinds[3] = "Hamza". Isliye "Hamza" print hoga.
//? Fifth Iteration (i = 4): freinds[4] = true. Isliye true print hoga.
//? Sixth Iteration (i = 5): freinds[5] = 10. Isliye 10 print hoga.
//? Increment: Har iteration ke baad i++ ho raha hai, jo i ko increase kar deta hai.

//? Jab i = 6 ho jaata hai, tab i < freinds.length ka condition (6 < 6) false ho jaata hai, aur loop terminate ho jaata hai.


//! Dry run 
//? sab sy pehle initialize howa i = 0 next is i chota hai freinds ki length sy length jo hai abhi 6  hai it's true phr increment howa i ++ tu i ki value 0 thi ab i ki value hogai 1 initialize aik dafa hota hai ab hogi condition check i abhi bhi chota hai freinds ki length sy ji han tu condtion true hogai ab increment hoga ye chalta rahe ga jab tak i ki value freinds ki length ky barabr ya bari na hojaye aur ye print kr ta rahe ga freinds ky aik aik value ko jab tak increment = na hojaye length ky is main jese 6 ky pass phonchy ga usky bad condiion false hojaye gi



//! print in reverse 
for (let i = freinds.length - 1; i >= 0; i--) {
    console.log(freinds[i]);
}
// console.log(freinds)

//! Aapko reverse mein loop chalana hai, isliye humein i ko freinds.length - 1 se start karna hoga aur loop ke har iteration mein i-- karna hoga, taake wo pehle element tak pohnch jaaye.

//! Dry Run 
//? i = 6 - 1 = 5;
// 1. Initial Setup:
// freinds = ["Ayan", "Aman", "Danish", "Hamza", true, 10]
// Array ka length = 6 (so the indices go from 0 to 5).
// 2. Loop Starts:
// i = freinds.length - 1 = 6 - 1 = 5 (last index of the array).
// Condition: i >= 0 (5 >= 0) — True, so the loop starts.
// 3. Iterations:
// First Iteration:

// i = 5
// freinds[5] = 10
// console.log(freinds[5]); => Prints 10
// i-- => Now i = 4
// Second Iteration:

// i = 4
// freinds[4] = true
// console.log(freinds[4]); => Prints true
// i-- => Now i = 3
// Third Iteration:

// i = 3
// freinds[3] = "Hamza"
// console.log(freinds[3]); => Prints Hamza
// i-- => Now i = 2
// Fourth Iteration:

// i = 2
// freinds[2] = "Danish"
// console.log(freinds[2]); => Prints Danish
// i-- => Now i = 1
// Fifth Iteration:

// i = 1
// freinds[1] = "Aman"
// console.log(freinds[1]); => Prints Aman
// i-- => Now i = 0
// Sixth Iteration:

// i = 0
// freinds[0] = "Ayan"
// console.log(freinds[0]); => Prints Ayan
// i-- => Now i = -1
// 4. Loop Ends:
// i = -1
// Condition: i >= 0 (-1 >= 0) — False, loop stops.
// 5. Final Output:

//! Humne array ko reverse order mein print karne ke liye loop ko i = freinds.length - 1 se start kiya aur i-- karte hue loop ko reverse mein chalaya.
//! Jab i 0 tak pohnch gaya, loop ka condition false ho gaya aur loop terminate ho gaya.