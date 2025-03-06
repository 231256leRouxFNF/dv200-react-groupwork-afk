import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import Card from "./components/Card/Card";
import Accordion from "./components/Accordion/Accordion";
import Form from "./components/Form/Form";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

// Import images - adjust these paths/filenames to match your actual images
import Image1 from "./images/img-1.png";
import Image2 from "./images/img-2.png";
import Image3 from "./images/img-3.png";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="components-grid">
        <Card
          imageUrl={Image1}
<<<<<<< HEAD
          title="Engines"
          description="2.3L EcoBoost (315 HP) or 5.0L Coyote V8 (486 HP) in GT trim."
        />
        <Card
          imageUrl={Image2}
          title="Design"
          description="Aggressive styling, retractable soft-top (available in black/brown), integrated rear spoiler."
        />
        <Card
          imageUrl={Image3}
          title="Trims"
          description="Ecoboost, GT and GT Premium."
=======
          title="Card 1"
          description="This is the first card component"
        />
        <Card
          imageUrl={Image2}
          title="Card 2"
          description="This is the second card component"
        />
        <Card
          imageUrl={Image3}
          title="Card 3"
          description="This is the third card component"
>>>>>>> parent of 667a783 (cards)
        />
      </div>
      <Accordion />
      <Form />
    </Router>
  );
}
