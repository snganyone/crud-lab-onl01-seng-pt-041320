import React, { Component } from 'react';

class RestaurantInput extends Component {
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
        <form>
          <input type="text" value={this.state.text} onChange={this.handleOnChange}/>
          <input type="submit"/>
        </form>
        {this.state.text}
      </div>
    );
  }
};

export default RestaurantInput;
