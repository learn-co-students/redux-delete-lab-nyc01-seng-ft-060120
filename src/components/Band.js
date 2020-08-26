import React, { Component } from 'react';

class Band extends Component {

  render() {
    console.log(this.props.band)
    return(
      <li>
        {this.props.band.name}
        <button onClick={() => this.props.deleteBand(this.props.band.id)}>Delete Band</button>
      </li>
    );
  }
};

export default Band;
