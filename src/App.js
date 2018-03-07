import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { authUser, signOutUser } from './libs/awsLib';

import Alert from './components/Alert.js';
import NavBar from './containers/NavBar';
import Routes from './Routes';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true,
      showAlert: false,
      alertType: null,
      alertMessage: null
    };
  }

  async componentDidMount() {
    try {
      if (await authUser()) {
        this.userHasAuthenticated(true);
      }
    } catch (e) {
      alert(e);
    }

    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  };

  handleLogout = event => {
    signOutUser();

    this.userHasAuthenticated(false);

    this.setState({
      showAlert: true,
      alertType: 'success',
      message: 'You have been succesfully logged out.'
    });

    this.props.history.push('/');
  };

  render() {
    const navBarProps = {
      isAuthenticated: this.state.isAuthenticated,
      handleLogout: this.handleLogout
    };
    const alertProps = {
      type: this.state.alertType,
      message: this.state.message
    };
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      !this.state.isAuthenticating && (
        <div className="App">
          <NavBar {...navBarProps} />
          {this.state.showAlert && <Alert {...alertProps} />}
          <Routes childProps={childProps} />
        </div>
      )
    );
  }
}

export default withRouter(App);
