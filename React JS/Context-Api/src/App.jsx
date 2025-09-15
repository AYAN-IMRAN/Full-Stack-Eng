import React, { useState } from "react";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import ThemeButton from "./components/ThemeButton";
import Header from "./components/Header"



function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={
          theme === "light"
            ? "min-h-screen bg-white text-black transition"
            : "min-h-screen bg-neutral-900 text-white transition"
        }
      >
        <Header />
        <div className="flex items-center justify-center h-[80vh]">
          <ThemeButton />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
