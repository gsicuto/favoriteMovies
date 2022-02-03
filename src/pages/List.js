import React from 'react';
import { MoviesList } from '../components/MoviesList';

export const List = ({ movies }) => {
  return <div>
    <MoviesList movies={ movies }/>
  </div>;
};
