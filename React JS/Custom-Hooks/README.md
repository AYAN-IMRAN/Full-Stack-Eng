

## 🧩 **1. React Custom Hooks Kya Hote Hain?**

> Custom hook ek **function hota hai jo "use" se start hota hai**, jisme hum apni **logic reuse** kar sakte hain jaise data fetch, form handle, etc.

📦 **React ka rule**: Hook ka naam `use` se start hona chahiye, jaise `useTodo`

---

## 🧠 **2. Kyun Use Karte Hain?**

✅ Code DRY (Don't Repeat Yourself) hota hai
✅ Reusability badhti hai
✅ Complex logic ko component se alag kar sakte ho
✅ Clean aur modular ban jata hai code

---

## ⚙️ **3. App Structure Overview**

```
App.jsx (UI part)
⬇️
useTodo.js (Custom Hook: logic part)
⬇️
API se todos fetch karta hai
```

---

## 🔍 **4. Code Dry Run (Step by Step Samjho)**


## 📁 `src/hooks/todo.js`

### 📦 Custom Hook: `useTodo()`

```js
import { useEffect, useState } from "react";

function useTodo() {

  const [todo, setTodo] = useState([]);       // 🧠 Todos ki list
  const [loading, setLoading] = useState(false); // 🔄 Loading state

  async function apiCall() {
    setLoading(true);  // 🚨 Loading on

    const response = await fetch("https://jsonplaceholder.typicode.com/todos/"); // 🌐 Fake API se data
    const data = await response.json(); // 📦 JSON data mil gaya

    setTodo(data);     // ✅ State update with todos
    console.log(data); // 👀 Console check

    setLoading(false); // 🔄 Loading off
  }

  useEffect(() => {
    apiCall(); // 📞 Component mount hone pe 1 baar call
  }, []);

  return { todo, loading }; // 🎁 Ye dono values export ho rahi hain
}

export default useTodo;
```

---

## 🧠 Dry Run of `useTodo()` – Roman Urdu

| Step | Description                                                    |
| ---- | -------------------------------------------------------------- |
| 1️⃣  | `useTodo()` function call hota hai jab component load hota hai |
| 2️⃣  | `todo` = empty list, `loading` = false                         |
| 3️⃣  | `useEffect()` chalta hai (component mount hotey hi)            |
| 4️⃣  | `apiCall()` function run hota hai                              |
| 5️⃣  | `setLoading(true)` → loading spinner dikhata hai               |
| 6️⃣  | `fetch()` se data aata hai 200 todos ka                        |
| 7️⃣  | `setTodo(data)` → state update                                 |
| 8️⃣  | `setLoading(false)` → spinner hata do                          |
| 9️⃣  | Final return: `{ todo, loading }` is now available to UI       |

---

## 📁 `App.jsx`

### 👨‍🎨 UI Code using the Custom Hook

```js
import React from 'react';
import useTodo from './hooks/todo'; // 🧠 Custom hook import

function App() {
  const { todo, loading } = useTodo(); // 🧲 Hook se data le liya

  return (
    <div>
      {loading && <p>loading......</p>}  {/* 🔁 Jab loading true ho */}
      
      {!loading &&                     // ✅ Jab loading khatam ho
        todo.map((Element, index) => (
          <li key={index}>{Element.title}</li> // 📋 Todo title render
        ))
      }
    </div>
  );
}

export default App;
```

---

## 🧠 Dry Run of `App.jsx` – Roman Urdu

| Step                                                         | Kya Hora Hai? |
| ------------------------------------------------------------ | ------------- |
| ✅ `useTodo()` call hota hai                                  |               |
| 🧠 `todo` and `loading` hook se milte hain                   |               |
| ⏳ Jab tak `loading` true hai → "loading..." text dikhata hai |               |
| 📋 Jab loading false ho jaye → `todo.map()` chalta hai       |               |
| ✅ Har todo ka title list ke form mein UI pe render hota hai  |               |

---

## 🧪 Interview Ready Breakdown

| ❓ Question                                    | ✅ Answer                                                                        |
| --------------------------------------------- | ------------------------------------------------------------------------------- |
| Custom hook kya hota hai?                     | Ek reusable function jo React ke hooks use karta hai (e.g. useState, useEffect) |
| useEffect ka role kya tha yahan?              | API call ko component mount hone par 1 baar chalane ke liye                     |
| Kyun `useTodo` bana custom hook mein?         | Kyunki logic ko UI se alag karna chahta tha (clean, reusable code)              |
| Agar multiple component same todo chahen toh? | Sirf `useTodo()` use karo, logic already ready hai                              |

---

## 💡  Tips

🔄 Always start custom hooks with `use`
📦 Keep your hooks in `/hooks/` folder
🧱 Separate logic (hook) vs UI (component)
🎯 Use in real-world: form handling, fetch logic, theme toggle, etc.

---


---

## 🧪 **6. Interview Hacks 💼**

🧩 **Q: Custom hook aur normal function mein farq?**
➡️ Custom hook React ke lifecycle aur states ke sath kaam karta hai — normal function sirf logic chala sakta hai.

🧩 **Q: Hook kyun banate hain?**
➡️ Reusability, clean structure, aur logic ko reuse karne ke liye.

🧩 **Q: Custom hook mein fetch logic kyun lete ho?**
➡️ Kyunki har component mein repeat na karna pade. Ek jagah likho, har jaga use karo.

---

## 💡 **7. Real Life Tip**

🛠 Jab bhi koi functionality **repeat** ho rahi ho jaise:

* Fetch logic
* Form input
* Theme toggle

---

## 🎁 **8. Bonus Practice Ideas**

| Project Idea     | Custom Hook Kaam      |
| ---------------- | --------------------- |
| Weather App      | `useWeather()`        |
| News Fetcher     | `useNews()`           |
| Form Validation  | `useFormValidation()` |
| Dark Mode Toggle | `useDarkMode()`       |
| Mouse Tracker    | `useMouse()`          |

---

## ✅ Summary Card

| Concept               | Status |
| --------------------- | ------ |
| `useState`            | ✅      |
| `useEffect`           | ✅      |
| API Fetch             | ✅      |
| Custom Hook Structure | ✅      |
| Hook Return Data      | ✅      |
| Use in Component      | ✅      |

---


