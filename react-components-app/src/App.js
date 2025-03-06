import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import Card from "./components/Card/Card";
import Accordion from "./components/Accordion/Accordion";
import Form from "./components/Form/Form";
import "./App.css";

// Import images - adjust these paths/filenames to match your actual images
import Image1 from './images/img-1.png';
import Image2 from './images/img-2.png'; // Replace with actual different images if needed
import Image3 from './images/img-3.png'; // Using same image for example

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Carousel />

      <div className="components-grid">
        <Card
          imageUrl={Image1}
          title="Engines"
          description=" 2.3L EcoBoost (315 HP) or 5.0L Coyote V8 (486 HP) in GT trim."
        />
        <Card
          imageUrl={Image2}
          title="Design"
          description=" Aggressive styling, retractable soft-top (available in black/brown), integrated rear spoiler."
        />
        <Card
          imageUrl={Image3}
          title="Trims"
          description="Ecoboost, GT and GT Premium"
        />
      </div>

      <Accordion />
      <Form />
    </div>
  );
}
