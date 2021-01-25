import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants
 from '../components/restaurants/Restaurants';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addRestaurant: text => dispatch({type: 'ADD_RESTAURANT', text })
})

export default RestaurantsContainer;
