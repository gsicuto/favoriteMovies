import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom'

export const MovieCard = ({ image, name, id }) => {
  return <div className='movie-card'>
    <Link to={`/movie/${id}`}>
      <img src={image} alt={name}/>
      <h3>{name}</h3>
    </Link>
  </div>;
};
