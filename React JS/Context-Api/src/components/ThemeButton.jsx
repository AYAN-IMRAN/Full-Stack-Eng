    import React, { useContext } from 'react'
    import { ThemeContext } from '../context/ThemeContext'

    function ThemeButton() {
        const {theme ,toggleTheme} = useContext(ThemeContext)
    return (
        <div>
        <button
        onClick={toggleTheme}
        className="px-6 py-3 rounded-xl font-semibold 
                    bg-gradient-to-r from-cyan-500 to-blue-500 
                    hover:from-cyan-400 hover:to-blue-400 
                    text-white shadow-lg"
        >

        Switch to {theme === "light" ? "🌙 Dark" : "☀️ Light"} Mode
        </button>
        </div>
    )
    }

    export default ThemeButton
