import React from 'react';
import { MovieCard } from './MovieCard';

export const MoviesList = ({ movies }) => {
  return <>
    {movies.map( movie => <MovieCard key={movie.id} image={movie.image} name={movie.name}/>)} 
  </>;
};