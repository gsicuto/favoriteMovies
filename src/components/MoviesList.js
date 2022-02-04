import React from 'react';
import { MovieCard } from './MovieCard';

export const MoviesList = ({movies}) => {
  return <>
    {movies.map( movie => <MovieCard image={movie.image} name={movie.name}/>)} 
  </>;
};