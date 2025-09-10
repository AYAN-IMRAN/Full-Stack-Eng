// 📁 src/App.jsx
import React, { useState } from "react";
import UseEffectComponent from "./Component/useEffectComponent";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>🎯 Parent Component</h2>

      <button onClick={() => setCount(count + 1)}>➕ Count: {count}</button>
      <br /><br />

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="✍️ Type something..."
      />

      <hr />

      <UseEffectComponent count={count} inputValue={inputValue} />
    </div>
  );
}

export default App;
