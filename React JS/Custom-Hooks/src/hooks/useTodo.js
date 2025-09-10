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