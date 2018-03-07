import React, { Component } from 'react';

import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser
} from 'amazon-cognito-identity-js';

import './Login.css';
import LoaderButton from '../components/LoaderButton.js';
import config from '../config';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: '',
      password: ''
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    try {
      await this.login(this.state.email, this.state.password);
      this.props.userHasAuthenticated(true);
      this.props.history.push('/');
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  };

  login(email, password) {
    const userPool = new CognitoUserPool({
      UserPoolId: config.cognito.USER_POOL_ID,
      ClientId: config.cognito.APP_CLIENT_ID
    });
    const user = new CognitoUser({ Username: email, Pool: userPool });
    const authenticationData = { Username: email, Password: password };
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    return new Promise((resolve, reject) =>
      user.authenticateUser(authenticationDetails, {
        onSuccess: result => resolve(),
        onFailure: err => reject(err)
      })
    );
  }

  render() {
    return (
      <div id="login-form-container" className="row">
        <div className="col-md-6 offset-md-3 col-10 offset-1">
          <div className="card">
            <div className="card-header">
              <h3>Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    className="form-control"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    className="form-control"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder="Password"
                  />
                </div>
                <LoaderButton
                  type="submit"
                  disabled={!this.validateForm()}
                  isLoading={this.state.isLoading}
                  text="Submit"
                  loadingText=" Logging in…"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
