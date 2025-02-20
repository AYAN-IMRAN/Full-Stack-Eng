// Loop ke liye zaroori hai 4 cheezein:

// 1. Initialization (ek dafa hi hota hai)
// 2. Loop body
// 3. Increment/Decrement
// 4. Condition 

//! Increment Example 
for(let i = 1; i <= 6; i++){
    // Loop body: Yeh code har iteration mein execute hota hai
    console.log(i);
}

// output 
// 1
// 2
// 3
// 4
// 5
// 6

// Explanation:

//! 1. Initialization: 
// - `let i = 1;` loop ki shuruat mein i ko 1 set karte hain. Yeh sirf ek dafa hota hai aur iske baad har iteration mein i ki value ko update kiya jata hai.

//! 2. Condition: 
// - `i <= 6;` Yeh condition har baar execute hone se pehle check hoti hai.
// - Jab tak i ki value 6 ya usse kam hoti hai, loop chalti rahegi. Jab condition false ho jaati hai, loop stop ho jata hai.

//! 3. Loop Body: 
// - `console.log(i);` Yeh loop ki body hai, jo har iteration mein i ki current value ko print karte hai. 
// - Pehle iteration mein `i` ki value 1 print hogi, doosre mein 2, aur isi tarah 6 tak chalega.

//! 4. Increment/Decrement:
// - `i++` se i ki value har iteration ke baad 1 se barhti hai. Iska matlab hai ke i ki value pehle 1, phir 2, phir 3, aur isi tarah increment hoti rahegi.

//! Process Flow:
// - Pehli baar jab loop shuru hota hai, `i = 1` initialize hota hai.
// - Condition check hoti hai: kya `i` ki value 6 ya usse chhoti hai? Haan, i = 1 hai, jo condition ko true banaata hai.
// - Loop body execute hoti hai aur `i` ki value (1) print hoti hai.
// - Phir `i++` execute hota hai, i ki value 2 ho jati hai.
// - Ab condition check hoti hai: kya `i <= 6` hai? Haan, i = 2 hai, loop dobara chalega.
// - Yeh process tab tak continue rahega jab tak `i` ki value 6 tak na pohanch jaye.

// Jab `i` ki value 7 hoti hai, to condition `i <= 6` false ho jaati hai aur loop ruk jaata hai.


//! decrement Example 
for(let i = 5; i >= 1; i--){
    // Loop body: Yeh code har iteration mein execute hota hai
    console.log(i);
}
