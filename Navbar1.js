// import React,{useState} from "react";
// import "./Navbar1.css";
// import Hamburger from 'hamburger-react'

// const Navbar1 = () => {
//   const [showNavbar, setShowNavbar] = useState(false)

//   const handleShowNavbar = () => {
//     setShowNavbar(!showNavbar)
//   }

//   return (
//     <nav className="navbar">
//       <div className="container">
        
//         <div className="menu-icon" onClick={handleShowNavbar}>
//           <Hamburger />
//         </div>
//         <div className={`nav-elements  ${showNavbar && 'active'}`}>
//           <ul>
//             <li>
//               <a href="/">Home</a>
//             </li>
//             <li>
//               <a  href="/blog">Blog</a>
//             </li>
//             <li>
//               <a href="/projects">Projects</a>
//             </li>
//             <li>
//               <a href="/about">About</a>
//             </li>
//             <li>
//               <a href="/contact">Contact</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }


// export default Navbar1;




import { useState } from "react"
import "./Navbar1.css";

export default function Navbar1() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        MacroSoft
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        {/* hamburger svg code... */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}