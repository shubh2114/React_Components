import React, { useState } from "react";
import "./starRating.css";

const StarRating = () => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const arr = new Array(5);
  arr.fill(0);

  function rating(index) {
    return hoveredRating > 0
      ? index + 1 <= hoveredRating
      : index + 1 <= selectedRating;
  }

  return (
    <div>
      {arr.map((_, index) => {
        return (
          <span
            key={index}
            className={`star ${rating(index) ? "yellowStar" : ""}`}
            onClick={() => setSelectedRating(index + 1)}
            onMouseEnter={() => {
              setHoveredRating(index + 1);
            }}
            onMouseLeave={() => setHoveredRating(0)}
          >
            &#x2605;
          </span>
        );
      })}
      <div>Your selected Ratings is : {selectedRating}</div>
    </div>
  );
};

export default StarRating;
