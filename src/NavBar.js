import React, { Component } from 'react';

import './NavBar.css';
import laser from './images/laser-icon.png';
import cat from './images/cat-icon.png';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          <i className="fa fa-home" aria-hidden="true" /> Pine Meadow
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link active">
                <img
                  alt="cat camera logo"
                  style={{ marginRight: '9px', marginBottom: '4px' }}
                  className="nav-img"
                  height="20"
                  width="20"
                  src={cat}
                />Cam
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">
                <img
                  alt="laser camera logo"
                  style={{ marginRight: '5px' }}
                  className="nav-img"
                  height="25"
                  src={laser}
                />Laser - Coming Soon
              </a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li id="login-logout-container" className="nav-item active">
              {this.props.isAuthenticated ? (
                <button
                  id="logout"
                  onClick={this.props.handleLogout}
                  className="btn btn-outline-light"
                >
                  <i className="fa fa-sign-in" aria-hidden="true" /> Logout
                </button>
              ) : (
                [
                  <a href="/login" class="btn btn-outline-light">
                    <i className="fa fa-sign-in" aria-hidden="true" /> Login
                  </a>
                ]
              )}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
