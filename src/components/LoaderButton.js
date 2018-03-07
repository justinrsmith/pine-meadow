import React from 'react';

export default ({
  isLoading,
  text,
  loadingText,
  className = '',
  disabled = false,
  ...props
}) => (
  <button
    className={`btn btn-primary ${className}`}
    disabled={disabled || isLoading}
    {...props}
  >
    {isLoading && <i className="fa fa-refresh fa-spin" />}
    {!isLoading ? text : loadingText}
  </button>
);
