import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = (event) => {
  this.setState({
    text: event.target.value
  });
}

  render() {
    return (
      <div>
      <h3>Review Input</h3>
        <form>
          <input type="text"/ >
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
