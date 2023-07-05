import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="logo"></h1>
      <div onClick={toggleMenu} className="hamburger-menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" className={location.pathname === "/" ? "active-link" : ""}>Home</Link></li>
        <li><Link to="/resume" className={location.pathname === "/resume" ? "active-link" : ""}>Resume</Link></li>
        {/* <li><Link to="/about" className={location.pathname === "/about" ? "active-link" : ""}>About</Link></li> */}
        <li><Link to="/contact" className={location.pathname === "/contact" ? "active-link" : ""}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
