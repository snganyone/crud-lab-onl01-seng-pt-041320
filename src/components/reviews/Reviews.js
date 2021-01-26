import React, { Component } from 'react';
import Review from './Review';

const Reviews = props => {
  return(
    <div>{props.reviews.map(review => <Review key={review.id} id={review.id} review={review}/>)}</div>
  )
}

export default Reviews;