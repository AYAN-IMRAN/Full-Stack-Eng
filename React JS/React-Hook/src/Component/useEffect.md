

# 🧠 **1. useEffect**

---

## ✅ **Definition**

> `useEffect()` React ka wo hook hai jo **side effects** ko handle karta hai. Side effects matlab:

* API call karna
* DOM change karna
* Timer lagana
* Local storage se data uthana
* Ya kisi external cheez se data lena (outside React world)

---

## 💡 **Kab chalta hai useEffect?**

### `useEffect(() => { }, [])`

➡️ Sirf **component mount** hone par chalta hai (jaise pehli dafa page khulta hai).

### `useEffect(() => { }, [dependency])`

➡️ Jab **dependency change hoti hai**, tab chalta hai.

### `useEffect(() => { })`

➡️ **Har re-render** ke baad chalta hai (rare case).

---

## 👨‍🏫 Real Life Example: API Call on Load

```jsx
import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    console.log("⏳ useEffect chala");

    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        console.log("📦 API se data mila:", data);
        setQuote(data.content);
      });
  }, []); // empty dependency = sirf 1 dafa chalega

  return (
    <div>
      <h2>💬 Quote:</h2>
      <p>{quote}</p>
    </div>
  );
}

export default App;
```

---

## 🔍 **Dry Run + Re-render Breakdown:**

| Step | What Happens                          | Output                        |
| ---- | ------------------------------------- | ----------------------------- |
| 🟢 1 | Component render hota hai             | `quote = ""`                  |
| ⚡ 2  | `useEffect` chalta hai                | Console: `⏳ useEffect chala`  |
| 🌐 3 | API call hoti hai                     | External data fetch           |
| ✅ 4  | `setQuote()` se state update hoti hai | React dobara render karta hai |
| 🔁 5 | Updated quote UI pe dikh jata hai     | ✅ Success                     |

---

## 🧠 Re-render kyun hua?

> Jab `setQuote()` chalta hai, React **dobara render** karta hai — is bar `quote` state ke saath.

---

## 🔥 Bonus useEffect Variations:

```js
useEffect(() => {
  console.log("Har re-render pe chalay ga");
}); // NO dependency

useEffect(() => {
  console.log("Jab 'count' change ho tabhi chale");
}, [count]); // DEPENDENCY BASED
```

---

## 🎯 **Real Use Cases of `useEffect`**

| Use Case               | Example                |
| ---------------------- | ---------------------- |
| API Fetch              | Weather App, News Feed |
| DOM Event Listener     | Keyboard short cuts    |
| Timer                  | Countdown, Clock       |
| Sync with LocalStorage | Todo App local save    |

---
