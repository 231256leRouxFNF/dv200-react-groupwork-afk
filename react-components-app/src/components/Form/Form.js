import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const [inputValue, setInputValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    console.log("Saved Input:", inputValue);

    setSubmitted(true); // Show success message
    setInputValue(""); // Clear input field

    // Hide message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type here..."
      />
      <button type="submit">Submit</button>

      {/* Success Message */}
      {submitted && (
        <p className="success-message">Your message has been received!</p>
      )}
    </form>
  );
}
