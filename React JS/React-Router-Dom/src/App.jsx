// { import React from "react";
// import { BrowserRouter, Route, Routes ,Link } from "react-router-dom";
// import About from "./components/About";
// import Contact from "./components/Contact";

// function App() {
//   return (
//     <div className="w-full h-screen bg-slate-900 text-white flex justify-center">
//       <BrowserRouter>

//       <nav className="w-[50%] h-12 bg-amber-50 text-black p-1 rounded flex items-center justify-around  ">
// <Link to="/"> Home </Link>
// <Link to="/About"> About </Link>
// <Link to="/Contact"> Contact </Link>
//       </nav>
//         <Routes>
//           {/* { <Route path="/" element={<App/>}/> } */}
//           <Route path="/About" element={<About />}/>
//           <Route path="/Contact" element={<Contact />}/>
//         </Routes>
//       </BrowserRouter>

      
//     </div>
//   );
// }

// export default App; }

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          About
        </NavLink>
        <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>
          Services
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/services" element={<h1>Services Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
