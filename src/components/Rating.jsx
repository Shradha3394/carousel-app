import {useState} from "react";
import "./Rating.css";

const StarRating = ({totalStars = 5, initialRating = 0, onRatingChange}) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleClick = (rating) => {
    if (onRatingChange) onRatingChange(rating);
  };

  const handleMouseEnter = (rating) => setHoveredRating(rating);
  const handleMouseLeave = () => setHoveredRating(0);

  const displayRating = hoveredRating || initialRating;

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => {
        const currentRating = index + 1;
        const isHalfFilled = displayRating > index && displayRating < currentRating;
        const isFilled = displayRating >= currentRating;

        return (
          <span
            key={index}
            className={`star ${isFilled ? "filled" : isHalfFilled ? "half-filled" : ""}`}
            onClick={() => handleClick(currentRating)}
            onMouseEnter={() => handleMouseEnter(currentRating - 0.5)}
            onMouseLeave={handleMouseLeave}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
