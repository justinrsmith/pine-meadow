import React from 'react';

export default ({ type, message }) => (
  <div className={`alert alert-${type} col-md-10 offset-md-1 col-10 offset-1`}>
    {message}
  </div>
);
