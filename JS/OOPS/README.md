# 🚀 **OOP in JavaScript Classes & Objects**

---

### 🧠 **1. What is Object-Oriented Programming (OOP)?**

**Definition:**
Object-Oriented Programming (OOP) is a programming paradigm that focuses on **objects** things that contain both **data (properties)** and **behavior (methods)**.

💬 OOP ka matlab hota hai code ko “objects” ke form mein likhna jahan data aur functions aik sath rehte hain, bilkul real-world cheezon ki tarah (jaise car, person, bank account).

---

### 🧩 **2. What is a Class?**

**Definition:**
A **class** is like a **blueprint or template** for creating objects.
It defines how the object will look (properties) and behave (methods).

💬 Class aik “design” ya “template” hoti hai ek baar banao, aur us se multiple cheezein (objects) bana lo.

---

### 💡 **Example: Class Syntax**

```js
class Car {
  constructor(engine, color, model) {
    this.engine = engine;
    this.color = color;
    this.model = model;
  }

  display() {
    console.log(`This car has a ${this.color} ${this.model} with a ${this.engine}`);
  }
}
```

---

### 🧱 **3. Constructor Method**

**Definition:**
A **constructor** is a special function inside the class that runs **automatically** when a new object is created using `new`.

💬 Constructor wo function hai jo **tab chalta hai jab naya object banta hai** aur yeh object ke andar values assign karta hai.

```js
constructor(engine, color, model) {
  this.engine = engine;
  this.color = color;
  this.model = model;
}
```

🧠 `this` keyword refers to **the current object** being created.

---

### 🚗 **4. Creating Objects from Class**

Once you have a class, you can create multiple **objects** from it each with unique properties.

```js
let car1 = new Car("Honda Engine", "Black", 2025);
let car2 = new Car("BMW Engine", "White", 2025);

console.log(car1);
console.log(car2);
```

💬 Ab dono cars same “Car” class se bani hain, lekin unke details alag hain ek black Honda, ek white BMW.

---

### 🖥️ **5. Calling Methods**

You can access or call any method using the **dot (.) operator**.

```js
car1.display();
car2.display();
```

💬 Method class ke andar likha hota hai object se call karte hi apna kaam karta hai.

Output:

```
This car has a Black 2025 with a Honda Engine
This car has a White 2025 with a BMW Engine
```

---

### 🧩 **6. Key Terms to Remember**

| Term            | Meaning                     | Example                           |
| --------------- | --------------------------- | --------------------------------- |
| **Class**       | Blueprint/template          | `class Car { ... }`               |
| **Object**      | Real instance of a class    | `new Car("Honda", "Black", 2025)` |
| **Constructor** | Runs when object is created | `constructor(...) {}`             |
| **Property**    | Variable inside an object   | `this.color`, `this.engine`       |
| **Method**      | Function inside a class     | `display()`                       |
| **this**        | Refers to current object    | `this.engine`                     |

💬 `this` ka matlab hai “yeh object” jo abhi bana hai.

---

### ⚙️ **7. Example: Full Code**

```js
class Makeniq {
  constructor(engine, color, model) {
    this.engine = engine;
    this.color = color;
    this.model = model;
  }

  display() {
    console.log(`This car has a ${this.color} ${this.model} with a ${this.engine}`);
  }
}

let car1 = new Makeniq("HONDA ENGINE", "Black Color", 2025);
let car2 = new Makeniq("BMW ENGINE", "White Color", 2025);

console.log(car1);
console.log(car2);

car1.display();
car2.display();
```

💬 Class se 2 cars banayi dono same structure, lekin alag details ke sath.

---

### 🧠 **8. Why Use Classes? (Benefits)**

1. **Reusability** ek hi class se multiple objects
2. **Clean Code** har cheez apne logical place pe
3. **Organization** easy to manage and extend
4. **Scalability** perfect for big projects
5. **Encapsulation** protect internal data

💬 Code zyada organized aur samajhne laayak ban jaata hai yehi OOP ka main goal hai.

---

### 🧩 **9. Real-World Analogy**

Think of a **class as a recipe**, and **objects as the cakes** baked using that recipe.

💬 Recipe (class) same hai lekin har cake (object) thoda alag ban sakta hai, jaise flavor ya shape.

---

### 🎯 **10. Interview Q&A**

**Q1:** What is a class in JavaScript?
**A:** A class is a blueprint for creating objects that share common properties and methods.

**Q2:** What is the purpose of a constructor?
**A:** The constructor initializes object properties when the object is created.

**Q3:** What is the `this` keyword?
**A:** It refers to the *current object* instance being used.

**Q4:** Can we have multiple objects from one class?
**A:** Yes that’s the main purpose of a class: **reusability**.

**Q5:** Why use OOP in JavaScript?
**A:** To make code modular, reusable, and easy to maintain same as real-world modeling.

---

### ⚡ **11. Quick Recap**

* 🧱 **Class** → Template
* 🚗 **Object** → Real instance
* ⚙️ **Constructor** → Runs automatically when object is created
* 🧩 **Methods** → Functions inside class
* 💡 **this** → Refers to the current object
* 🔁 **Reusability** → Class ka biggest advantage



