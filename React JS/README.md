## 💡 What is React?

**React** ek JavaScript library hai jo websites ko fast aur interactive banata hai.
React ka kaam hai: **UI banana — User Interface**.

> **UI = jo user dekhta hai screen par: buttons, text, images, etc.**

🧠 **React ko Facebook ne banaya** — kyunki unko fast and maintainable apps chahiye the.

---

## ❓ Why React?

Old JS frameworks mein jab UI update hoti thi, to pura page re-render hota tha — slow!
React ne ek naya concept laya: **Virtual DOM**.

---

## 🌳 What is DOM and Virtual DOM?

| DOM (Document Object Model) | Virtual DOM                          |
| --------------------------- | ------------------------------------ |
| Real website ka structure   | Copy in memory                       |
| Slow updates                | Fast diffing and updates             |
| Changes = full refresh      | Changes = only update affected parts |

📌 **React updates sirf wo part** of the page jahan change hota hai. Isse app fast hoti hai.

---

## ⚙️ What is a Component?

> 🔧 Component = ek **function** jo return karta hai HTML (JSX)
> React mein sab kuch component hota hai — har button, card, list, etc.

```js
function MyComponent() {
  return <h1>Hello World</h1>;
}
```

Yeh ek simple component hai. **JSX likhte hain, jo HTML jaisa hota hai JavaScript mein**.

---

## 📦 What are Props?

> **Props** = properties ya inputs jo component ko diye jaate hain

Explain:
**Props ka matlab hai values jo tum kisi component ko dete ho jaise: text, color, size.**

Example:

```js
<MyButton text="Click me" backgroundColor="red" />
```

---

## 🧪 Let's Explain Your First Code Step-by-Step:

### 🔷 App Component

```js
function App(){
  return (
    <div>
      <MyButton text="Click me" backgroudColor="red"/>
      <MyButton text="Buy now" />
      <MyButton text="Login" />
      <Todo title="Coding" description="i code daily" />
      <Todo title="Workout" description="Today is biceps day" />
    </div>
  )
}
```

🧠 `App()` ek **main component** hai jisme 2 types ke components use ho rahe hain:

* `MyButton` (custom button component)
* `Todo` (task or todo component)

---

### 🔹 MyButton Component

```js
function MyButton(prop){
  return (
      <button className="btn">{prop.text}</button>
  )
}
```

📌 Ye component prop ke zariye `text` le raha hai.

Explain:
**Ye component ek button bana raha hai, aur jo text tum usay doge wo button par show hoga.**

---

### 🔹 Todo Component

```js
function Todo({title, description}){
  return(
      <div className="todo">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
  )
}
```

Yahan destructuring ki gayi hai `{title, description}` directly mil rahe hain.

Explain:
**Todo component 2 cheezein show karta hai: title aur description. Ye har task represent karta hai.**

---

## 🔁 useState & Re-Rendering (Most Important)

```js
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0)
  console.log("App re-rendering");

  return (
    <div className="main">
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <Child1/>
        <Child2/>
    </div>
  )
}
```

### 🧠 What is `useState`?

React ke pass ek feature hai `useState()`
**Yeh ek variable banata hai jisme React khud changes detect karta hai.**

```js
let [count, setCount] = useState(0)
```

* `count`: current value
* `setCount`: function to update it

Jab bhi `setCount()` call hota hai → **component re-render hota hai**

---

### 🔁 Re-rendering Explained:

Console mein aata hai:

```
App re-rendering
child 1 re render
child 2 re render
```

Iska matlab jab `count` change hota hai — pura App component aur uske child re-render hote hain.

---

## 🔄 React Exports (Simple Guide)

### Default Export

```js
export default MyButton;
import MyButton from "./component/Button";
```

### Named Export

```js
export function MyButton() {}
import { MyButton } from "./component/Button";
```

Explain:
**Agar sirf 1 cheez export karni ho to default, warna named export use karte hain.**

---



## 📌 What is React?

- React ek JS library hai jo UI banane ke liye use hoti hai.
- Facebook ne banayi.
- Fast updates via Virtual DOM.

---

## 📘 Important Concepts

| Concept         | Meaning |
|----------------|---------|
| Component       | Function that returns JSX |
| Props           | Input to components |
| useState        | React ka state hook |
| Virtual DOM     | Fast in-memory copy of DOM |
| Re-render       | Component updates on state change |

---

## 💡 useState Example

```js
let [count, setCount] = useState(0);
````

* `count` is value
* `setCount` is function to update
* `setCount()` triggers re-render

---

## 🧪 Sample Code

```js
function MyButton({text}) {
  return <button>{text}</button>;
}

function Todo({title, description}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
```

---

## 📦 Exports

```js
// Default
export default MyButton;
import MyButton from "./Button";

// Named
export function MyButton() {}
import { MyButton } from "./Button";
```

---

## ✍️ Made by: Ayan Imran

🧠 Learn more: Follow for more React notes!

