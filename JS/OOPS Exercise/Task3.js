//! OOPS Task 3

// Classes, Objects, and Inheritance
//! Task 1: Class Inheritance
// Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".






// class Vehicle{
//     constructor(make, model){
//         this.make = make;
//         this.model = model;
//     }

//     startEngine(){
//         return "Engine started";
//     }
// }
// let vehicle1 = new Vehicle("LandCruiser",2025)
// console.log(vehicle1.startEngine());


//! Task 2: Method Overriding in Inheritance
// Extend the Vehicle class from the previous task to include a method move() that returns "The vehicle is moving". Then, override the move() method in the Car class to return "The car is driving".

// class Vehicle {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//     }

//     startEngine() {
//         return "Engine started";
//     }

//     move() {
//         return "The vehicle is moving";
//     }
// }

// class Car extends Vehicle {
//     constructor(make, model) {
//         super(make, model);  
//     }

//     // Overriding the move method
//     move() {
//         return "The car is driving";
//     }
// }



// let vehicle1 = new Vehicle("LandCruiser", 2025);
// console.log(vehicle1.startEngine());  // Output: Engine started
// console.log(vehicle1.move());  // Output: The vehicle is moving

// let car1 = new Car("Toyota", 2025);
// console.log(car1.startEngine());  // Output: Engine started
// console.log(car1.move());  // Output: The car is driving



//! Task 3: Static Methods in Classes
// Add a static method isVehicle(obj) to the Vehicle class that checks if a given object is an instance of Vehicle. The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise.



class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    static isVehicle(obj) {
      return obj instanceof Vehicle;
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, doors) {
      super(make, model);
      this.doors = doors;
    }
  }
  
  // Test the isVehicle method
  const vehicle = new Vehicle("Toyota", "Camry");
  const car = new Car("Honda", "Civic", 4);
  const notAVehicle = {make:"zooooo",model:"Fake"}
  
  console.log(Vehicle.isVehicle(vehicle)); // true
  console.log(Vehicle.isVehicle(car)); // true
  console.log(Vehicle.isVehicle(notAVehicle)); // false
  