import React from "react";
import Navbar from "../components/Navbar/Navbar"; // Import your Navbar

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <h1>Contact Us</h1>
        <p>Have a question about sports cars? Get in touch with us!</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
