import React, { useState } from "react";
import "./Accordion.css";

export default function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion ${isOpen ? "open" : ""}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide Section" : "Show Section"}
        <span
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        >
          🔽
        </span>
      </button>
      <div className="content">Accordion content goes here</div>
    </div>
  );
}
