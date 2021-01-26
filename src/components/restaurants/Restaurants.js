import React from 'react';
import Restaurant from './Restaurant'

const Restaurants = props => {
  return(
    <div>{props.restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={props.restaurants} delete={props.delete}/>)}</div>
  )
}

export default Restaurants;