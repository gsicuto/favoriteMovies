import React from 'react';
import './MovieCard.css'

export const MovieCard = ({ image, name }) => {
  return <div className='movie-card'>
    <img src={image} alt={name}/>
    <h3>{name}</h3>
  </div>;
};
