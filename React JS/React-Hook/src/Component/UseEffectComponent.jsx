// 📁 src/components/UseEffectComponent.jsx
import React, { useEffect } from "react";

function UseEffectComponent({ count, inputValue }) {
  useEffect(() => {
    console.log("📦 useEffectComponent chala - count ya inputValue change hua");
  }, [count, inputValue]);

  return (
    <div>
      <p>🧪 useEffectComponent Active</p>
    </div>
  );
}

export default UseEffectComponent;
