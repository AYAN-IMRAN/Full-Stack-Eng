import React from 'react';
import useTodo from './hooks/useTodo'; // 🧠 Custom hook import

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