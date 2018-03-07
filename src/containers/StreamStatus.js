import React, { Component } from 'react';

import cat from '../images/cat-icon.png';

class StreamStatus extends Component {
  constructor(props) {
    super(props);
    this.state = { online: null };
  }
  componentDidMount() {
    var that = this;
    var url =
      'https://fvjhtu2lzd.execute-api.us-east-1.amazonaws.com/dev/streamstatus';
    fetch(url)
      .then(function(response) {
        response.json().then(function(data) {
          that.setState({ online: data.online });
        });
      })
      .catch(function(object) {
        console.log('error');
      });
  }

  render() {
    let status = null;
    if (this.state.online === null)
      status = <span className="badge badge-danger">Loading</span>;
    else if (this.state.online)
      status = (
        <span className="badge badge-danger">
          <i className="fa fa-video-camera" aria-hidden="true" /> Live
        </span>
      );
    else if (!this.state.online)
      status = <span className="badge badge-danger">Offline</span>;

    return (
      <ul
        id="stream-status"
        className="list-inline"
        style={{ marginBottom: '0px' }}
      >
        <li className="list-inline-item">
          <img
            alt="cat camera logo"
            style={{ marginRight: '5px' }}
            className="nav-img"
            height="20"
            width="20"
            src={cat}
          />
        </li>
        <li className="list-inline-item pull-right">{status}</li>
      </ul>
    );
  }
}

export default StreamStatus;
