import React from 'react';

export const Confirmation = ({children, accept, reject}) => {
  return <div>
    <p>{children}</p>
    <button onClick={accept}>Sim</button>
    <button onClick={reject}>Não</button>
  </div>;
};
