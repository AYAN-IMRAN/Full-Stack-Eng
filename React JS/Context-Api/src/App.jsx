import React, { useState } from "react";
import { CounterContext } from "./context/CounterContext";
import Counter from "./components/Counter";
import "./App.css";


function App() {
  console.log("App re render ")
  const [count, setCount] = useState(0);
  return (
    <div className="app-container">
    <div className="main">
      <h1>Counter App</h1>
      <CounterContext.Provider value={{ count, setCount }}>
        <Counter />
      </CounterContext.Provider>
    </div>
    </div>

  );
}

export default App;
