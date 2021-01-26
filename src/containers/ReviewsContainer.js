import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} RestaurantId={this.props.restaurant.id}/>
        <Reviews reviews={this.props.reviews} deleteRestaurant={this.props.deleteRestaurant} RestaurantId={this.props.restaurant.id}/>
      </div>
    )
  }
}

const mapStateToProps = ({ reviews }) => ({ reviews });

const mapDispatchToProps = dispatch => ({
  addReview: (text, RestaurantId) => dispatch({type: 'ADD_REVIEW', text: text, RestaurantId: RestaurantId}),
  deleteRestaurant: id => dispatch({type: 'DELETE_REVIEW', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
