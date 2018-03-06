import React, { Component } from 'react';

import StreamStatus from './StreamStatus'

class Stream extends Component {
  render () {
    return (
      <div className="col">
        <StreamStatus/>
        <img className="img-fluid" src={this.props.url} alt=""/>
      </div>
    )
  }
}

export default Stream;
