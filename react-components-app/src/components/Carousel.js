import React, { useState } from 'react';
import './Carousel.css';

// Corrected import paths
import Image1 from '../images/img-1.png';
import Image2 from '../images/img-2.png';
import Image3 from '../images/img-3.png';

const images = [Image1, Image2, Image3];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="carousel">
      <button 
        className="carousel-button prev"
        onClick={() => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
      >
        &lt;
      </button>
      
      <img 
        src={images[currentIndex]} 
        alt={`Slide ${currentIndex + 1}`} 
        className="carousel-image"
      />
      
      <button 
        className="carousel-button next"
        onClick={() => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
      >
        &gt;
      </button>
    </div>
  );
}