import React, { useState } from "react";
import "./Accordion.css";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {/* Car Maintenance Tips */}
      <div
        className="accordion-toggle"
        onClick={() => toggleSection(0)}
      >
        Car Maintenance Tips {activeIndex === 0 ? "▲" : "▼"}
      </div>
      {activeIndex === 0 && (
        <div className="accordion-content">
          <p>
            Regularly check your oil levels, tire pressure, and brake pads to keep your car running smoothly. Don't forget to schedule routine services to prevent costly repairs.
          </p>
        </div>
      )}

      {/* Best Cars for Road Trips */}
      <div
        className="accordion-toggle"
        onClick={() => toggleSection(1)}
      >
        Best Cars for Road Trips {activeIndex === 1 ? "▲" : "▼"}
      </div>
      {activeIndex === 1 && (
        <div className="accordion-content">
          <p>
            For long drives, consider spacious and fuel-efficient options like the Subaru Outback, Honda CR-V, or Toyota Highlander. These vehicles provide comfort and reliability on the road.
          </p>
        </div>
      )}

      {/* How to Choose the Right Car */}
      <div
        className="accordion-toggle"
        onClick={() => toggleSection(2)}
      >
        How to Choose the Right Car {activeIndex === 2 ? "▲" : "▼"}
      </div>
      {activeIndex === 2 && (
        <div className="accordion-content">
          <p>
            Start by identifying your needs: commuting, family travel, off-roading, or luxury. Research fuel economy, safety ratings, and maintenance costs before making a decision.
          </p>
        </div>
      )}
    </div>
  );
}