import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    console.log("Input Value:", inputValue);
  };

  return (
    <div className="form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type here..."
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
