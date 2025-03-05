import React, { useState } from "react";
import "./Accordion.css";

export default function Accordion() {
  // State to track if the main section is open
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      {/* Main Accordion Button */}
      <button className="accordion-toggle" onClick={() => setIsOpen(!isOpen)}>
        Main Information {isOpen ? "▲" : "▼"}
      </button>

      {/* Expanding Section with Two Options */}
      {isOpen && (
        <div className="accordion-content">
          <button
            className="sub-option"
            onClick={() => console.log("Surfing Tips Clicked")}
          >
            Point 1
          </button>
          <button
            className="sub-option"
            onClick={() => console.log("Best Surf Spots Clicked")}
          >
            Point 2
          </button>
        </div>
      )}
    </div>
  );
}