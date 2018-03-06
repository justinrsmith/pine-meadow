import React, { Component } from 'react';

import Stream from './Stream';

class Home extends Component {
  render() {
    return (
      <div className="Home container-fluid">
        <div className="row">
          <Stream url="http://73.74.197.134:48461/" />
        </div>
      </div>
    );
  }
}

export default Home;
