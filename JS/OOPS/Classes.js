// Class aik template ya sample ki tarah hoti hai jo hum aik bar bana kar baar baar use kar saktay hain.
class makeniq {
    // Constructor aik special function hota hai jo jab hum new object create karte hain, us waqt call hota hai.
    // Yeh hum say values parameters ki form mein leta hai taake har object ke liye unique values assign ki ja sakein.
    constructor(engine, color, model) {
        this.engine = engine;  // Yeh engine ki value ko humaray object ke engine property mein store karta hai.
        this.color = color;    // Yeh color ki value ko humaray object ke color property mein store karta hai.
        this.model = model;    // Yeh model ki value ko humaray object ke model property mein store karta hai.
    }

    // Display method humaray object ki details ko console mein print karne ke liye hai.
    display() {
        // Template literals use kar ke hum readable format mein car ke details show karte hain.
        console.log(`This car has a ${this.color} ${this.model} with a ${this.engine}`);
    }

    // Constructor aur methods ke zariye hum easily different cars bana saktay hain jo apni unique properties rakhti hain.
    // Is tarah hum code ko reuse kar saktay hain bina har baar naya code likhay.
}

// Naya object create kar rahe hain 'makeniq' class ka, jisme hum engine, color aur model ki values pass karte hain.
let car1 = new makeniq("HONDA ENGINE", "Black Color", 2025);
let car2 = new makeniq("BMW ENGINE", "White Color", 2025);

// Ab hum bike1 object ko console pe print kar rahe hain.
console.log(car1);
console.log(car2);

// Agar chahain to 'display' method bhi call kar saktay hain taake car ke details ek achay format mein dekhein.
car1.display(); 
car2.display(); 
