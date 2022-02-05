import React from 'react';

export const Alert = ({ children }) => {
  return <div style={{
    backgroundColor: 'yellow',
    width: '300px',
    color: 'blue'
  }}>
    <p>{children}</p>
  </div>;
};
