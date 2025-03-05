import React from 'react';
import './Card.css';

// Card component
export default function Card({ imageUrl, title, description }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}