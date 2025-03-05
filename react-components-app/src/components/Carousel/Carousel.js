import React, { useState } from "react";
import "./Carousel.css";

// Updated car images array
const images = [
  "https://images.unsplash.com/photo-1564435147636-8ca0966b0275?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1635748513933-710b66cc20cd?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1635748512931-13ca8d627b66?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="carousel">
      <button
        onClick={() =>
          setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }
      >
        &lt;
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <button
        onClick={() =>
          setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
        }
      >
        &gt;
      </button>
    </div>
  );
}
