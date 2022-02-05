import React,{ useEffect } from 'react';
import { MoviesList } from '../components/MoviesList';


export const List = ({ movies, getMovies }) => {

  useEffect(()=>{
    getMovies()
  },[])

  return <div>
    <MoviesList movies={ movies }/>
  </div>;
};
