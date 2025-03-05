import React, { useState } from "react";
import "./Carousel.css";

// Restore the images array
const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1018/600/400",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

//return statement that renders the carousel
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
