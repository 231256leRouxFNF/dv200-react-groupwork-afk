import React, { useState } from "react";
import "./Accordion.css";

export default function Accordion({ item1, item2 }) {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <div className="accordion">
      <div className={`accordion-section ${isOpen1 ? "open" : ""}`}>
        <button onClick={() => setIsOpen1(!isOpen1)}>
          {isOpen1 ? "Hide Section 1" : "Show Section 1"}
          <span
            style={{
              transform: isOpen1 ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          >
            🔽
          </span>
        </button>
        {isOpen1 && (
          <div className="content">
            <div>{item1}</div>
          </div>
        )}
      </div>

      <div className={`accordion-section ${isOpen2 ? "open" : ""}`}>
        <button onClick={() => setIsOpen2(!isOpen2)}>
          {isOpen2 ? "Hide Section 2" : "Show Section 2"}
          <span
            style={{
              transform: isOpen2 ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          >
            🔽
          </span>
        </button>
        {isOpen2 && (
          <div className="content">
            <div>{item2}</div>
          </div>
        )}
      </div>
    </div>
  );
}