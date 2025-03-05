import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import Card from "./components/Card/Card";
import Accordion from "./components/Accordion/Accordion";
import Form from "./components/Form/Form";
import "./App.css";

// Import images - adjust these paths/filenames to match your actual images
import Image1 from './images/img-1.png';
import Image2 from './images/img-1.png'; // Replace with actual different images if needed
import Image3 from './images/img-1.png'; // Using same image for example

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Carousel />

      <div className="components-grid">
        <Card
          imageUrl={Image1}
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
        />
      </div>

      <Accordion />
      <Form />
    </div>
  );
}
