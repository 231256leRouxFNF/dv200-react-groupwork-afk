import React from "react";
import Navbar from "../components/Navbar/Navbar"; // Import your Navbar

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>Crimson Velocity</strong>, the ultimate destination
          for sports car enthusiasts.
        </p>
        <p>
          Our passion for high-performance vehicles drives us to bring you the
          latest insights on speed, power, and luxury.
        </p>
        <p>
          From Ferraris to Mustangs, explore the world of fast cars and elite
          engineering.
        </p>
      </div>
    </div>
  );
}
