import React from 'react';

export const MoviesList = ({movies}) => {
  return <>
    {movies.map( movie => <h1>{movie.name}</h1>)} 
  </>;
};

// adicionar o MovieCard no retorno do map