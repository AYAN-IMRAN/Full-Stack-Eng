
---

### 🔁 DRY RUN Breakdown (Line by Line Roman Urdu):

#### ✅ useState:

```js
const [count, setCount] = useState(0)
```

Matlab React se keh rahe hain: “Mujhe ek number chahiye jiska naam `count` ho aur shuruaat mein 0 ho.”
Jab bhi `setCount()` chalega, **component dobara render** hoga.

#### ✅ useEffect:

```js
useEffect(() => {
  console.log("📦 useEffect chala")
}, [count, inputValue])
```

Iska matlab: “Jab bhi `count` ya `inputValue` change ho, yeh code chala do.”

#### ✅ useRef:

```js
const inputRef = useRef(null)
```

React ko bol rahe hain: “Yeh input field mujhe refer karke do — taake baad mein `.focus()` ya `.value` access kar saku.”

#### ✅ useMemo:

```js
const sum = useMemo(() => {
  // loop chalayenge only jab inputValue change hoga
}, [inputValue])
```

React se keh rahe ho: “Agar `inputValue` same hai, to dobara calculate na karo. Waqt zaya na karo!”

#### ✅ useCallback:

```js
const alertSum = useCallback(() => {
  alert(`Sum is ${sum}`)
}, [sum])
```

React se keh rahe ho: “Agar `sum` same hai to is function ko yaad rakho — dobara mat banao.”

---

### 🧨 Ugly Code vs ✅ useMemo Code Comparison

| Ugly Code 🔴                 | useMemo Clean Code ✅          |
| ---------------------------- | ----------------------------- |
| Har render pe loop chal raha | Sirf jab inputValue change ho |
| Slow performance             | Fast & Efficient              |
| Console pe bar bar log       | useMemo ke sath ek hi baar    |

---

### 📋 Hooks Summary Table

| Hook        | Kya karta hai (asaan)                       | Re-render trigger? |
| ----------- | ------------------------------------------- | ------------------ |
| useState    | State banata hai aur update karta hai       | ✅ Yes              |
| useEffect   | Jab component update ho ya mount ho         | ✅ Yes              |
| useRef      | DOM ya value ka reference deta hai          | ❌ No               |
| useCallback | Function yaad rakhta hai                    | ❌ No (unless deps) |
| useMemo     | Calculation yaad rakhta hai (expensive one) | ❌ No (unless deps) |

---

### 👇 Agla Step Kya Hai?

Agar tum chaho to:

* `fetch` API ka real example bhi add karein (`useEffect` mein data laana)
* `useReducer` sikhein
* `custom hooks` banana seekhein

Bas mujhe batao!

🔔 **Tum ready ho React Pro banne ke liye!**

Chalo aage badhein? 💻🔥
