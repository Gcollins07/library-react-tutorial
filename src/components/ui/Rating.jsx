import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export const Rating = ({ rating }) => {
  return (
    <div className="book__ratings">
        {Array.from({ length: 5 }, (_, index) => {
          if (index + 1 <= Math.floor(rating)) {
            return <FontAwesomeIcon key={index} icon="star" />;
          } else if (index < rating) {
            return <FontAwesomeIcon key={index} icon="star-half-alt" />;
          } else {
            return <FontAwesomeIcon key={index} icon={["far", "star"]} />;
          }
        })}
      </div>
  )
}
