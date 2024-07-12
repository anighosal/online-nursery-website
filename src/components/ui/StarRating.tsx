import React from "react";
import { FaStar } from "react-icons/fa"; // Importing solid star icon from react-icons/fa

interface StarRatingProps {
  rating: number;
  maxStars?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5 }) => {
  const roundedRating = Math.round(rating * 2) / 2; // Round to nearest 0.5
  const numStars = Math.min(maxStars, 5); // Limit to 5 stars

  const stars = [];
  for (let i = 1; i <= numStars; i++) {
    if (i <= roundedRating) {
      stars.push(<FaStar key={i} className="h-5 w-5 text-yellow-500" />);
    } else if (i - 0.5 <= roundedRating) {
      stars.push(<FaStar key={i} className="h-5 w-5 text-yellow-500" />);
    } else {
      stars.push(<FaStar key={i} className="h-5 w-5 text-gray-300" />);
    }
  }

  return <div className="flex items-center">{stars}</div>;
};

export default StarRating;
