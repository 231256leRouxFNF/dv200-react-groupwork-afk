import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import Card from "./components/Card/Card";
import Accordion from "./components/Accordion/Accordion";
import Form from "./components/Form/Form";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Carousel />

      <div className="components-grid">
        <Card
          imageUrl="https://picsum.photos/id/1020/300/200"
          title="Card 1"
          description="This is the first card component"
        />
        <Card
          imageUrl="https://picsum.photos/id/1021/300/200"
          title="Card 2"
          description="This is the second card component"
        />
        <Card
          imageUrl="https://picsum.photos/id/1022/300/200"
          title="Card 3"
          description="This is the third card component"
        />
      </div>

      <Accordion />
      <Form />
    </div>
  );
}
