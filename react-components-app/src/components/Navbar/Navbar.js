import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1>Crimson Velocity</h1>
      <div className="dropdown">
        <button onClick={() => setIsOpen(!isOpen)} className="dropdown-toggle">
          Menu
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            <Link to="/" className="dropdown-item">
              Home
            </Link>
            <Link to="/about" className="dropdown-item">
              About
            </Link>
            <Link to="/contact" className="dropdown-item">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
