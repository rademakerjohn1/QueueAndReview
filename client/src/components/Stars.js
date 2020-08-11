import React from 'react';
import StarRatings from 'react-star-ratings';

function Stars(props) {
  return (
    <StarRatings
      rating={props.rating}
      starRatedColor="red"
      starHozverColor="red"
      changeRating={props.changeRating}
      starDimension={"25px"}
      starSpacing={"2px"}
      numberOfStars={5}
      name='rating'
    />
  )
}

export default Stars;