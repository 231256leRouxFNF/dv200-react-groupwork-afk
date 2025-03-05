import React, { useState } from "react";
import "./Accordion.css";

export default function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Section</button>
      {isOpen && <div className="content">Accordion content goes here</div>}
    </div>
  );
}
