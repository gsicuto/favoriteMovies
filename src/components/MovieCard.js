import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom'

export const MovieCard = ({ image, name, _id }) => {
  return <div className='movie-card'>
    <Link to={`/movie/${_id}`}>
      <img src={image} alt={name}/>
      <h3>{name}</h3>
    </Link>
  </div>;
};
