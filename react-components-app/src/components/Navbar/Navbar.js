import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1>Red Cars</h1>
      <div className="dropdown">
        <button onClick={() => setIsOpen(!isOpen)} className="dropdown-toggle">
          Menu
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            <button onClick={() => console.log('Option 1 clicked')}>Mustang</button>
            <button onClick={() => console.log('Option 2 clicked')}>Ferrari</button>
            <button onClick={() => console.log('Option 3 clicked')}>Porsche</button>
          </div>
        )}
      </div>
    </nav>
  );
}