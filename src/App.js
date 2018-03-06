import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { authUser, signOutUser } from './libs/awsLib';

import NavBar from './NavBar';
import Routes from './Routes';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  async componentDidMount() {
    try {
      if (await authUser()) {
        this.userHasAuthenticated(true);
      }
    }
    catch(e) {
      alert(e);
    }

    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = authenticated => {
    this.setState({isAuthenticated: authenticated});
  }

  handleLogout = event => {
    signOutUser();

    this.userHasAuthenticated(false);

    this.props.history.push('/');
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      !this.state.isAuthenticating &&
      <div className='App'>
        <NavBar />
        {this.state.isAuthenticated
          ? <button onClick={this.handleLogout}>Logout</button>
          : [
              <a href='/login'>Login</a>
          ]}
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default withRouter(App);
