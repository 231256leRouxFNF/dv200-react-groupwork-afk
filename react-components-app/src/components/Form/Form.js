import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form-heading">Contact Us</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email"
        required
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your Message"
        rows="4"
        required
      />
      <button type="submit">Submit</button>

      {submitted && (
        <p className="success-message">Thank you! Your message has been received.</p>
      )}
    </form>
  );
}
