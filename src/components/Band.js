import React, { Component } from 'react';


class Band extends Component {

  render() {
    return(
      <div>
        <li>{this.props.bandName}</li>
        <button onClick={() => this.props.deleteBand(this.props.id)}>Delete</button>
      </div>
    );
  }
};




export default Band
