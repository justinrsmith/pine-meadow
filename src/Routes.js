import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AppliedRoute from './AppliedRoute';
import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path='/' exact component={Home} props={childProps} />
    <AppliedRoute path='/login' exact component={Login} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;