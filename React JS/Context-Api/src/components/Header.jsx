import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ThemeButton from "./ThemeButton"; // apna toggle button

function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header
      className={`flex items-center justify-between px-6 py-4 shadow-md ${
        theme === "light"
          ? "bg-white text-black"
          : "bg-neutral-900 text-white"
      }`}
    >
      {/* Logo / Title */}
      <h1 className="text-xl font-bold">My Blog</h1>

      {/* Theme Toggle Button */}
      <ThemeButton />
    </header>
  );
}

export default Header;
