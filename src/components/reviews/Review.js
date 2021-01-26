import React, { Component } from 'react';

class Review extends Component {

  handleDelete = () => {
    this.props.deleteRestaurant(this.props.id)
  }

  render() {
    const { review } = this.props;

    return (
      <div>
      <ul>
        <li>
          {review.text}
        </li>
        </ul>
        <button onClick={this.handleDelete}> X </button>
      </div>
    );
  }

};

export default Review;
