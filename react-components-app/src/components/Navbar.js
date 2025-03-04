import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1>Brand Name</h1>
      <div className="dropdown">
        <button onClick={() => setIsOpen(!isOpen)} className="dropdown-toggle">
          Menu
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            <button onClick={() => console.log('Option 1 clicked')}>Option 1</button>
            <button onClick={() => console.log('Option 2 clicked')}>Option 2</button>
            <button onClick={() => console.log('Option 3 clicked')}>Option 3</button>
          </div>
        )}
      </div>
    </nav>
  );
}