import React from 'react';
import StarRatings from 'react-star-ratings';

// Uses react-star-ratings package to render a 5-star rating component

function Stars(props) {
  return (
    <StarRatings
      rating={props.rating}
      starRatedColor="red"
      starHozverColor="red"
      changeRating={props.changeRating}
      starDimension={props.dimension}
      starSpacing={"2px"}
      numberOfStars={5}
      name='rating'
    />
  )
}

export default Stars;