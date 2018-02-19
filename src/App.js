import React, { Component } from 'react';

import NavBar from './NavBar';
import Stream from './Stream';
import './App.css';

class App extends Component {
    render() {
        return (
          <div className="App">
              <NavBar/>
              <div className="container-fluid">
                  <div className="row">
                      <Stream url="http://73.74.197.134:48461/"/>
                  </div>
              </div>
          </div>
        );
    }
}

export default App;
