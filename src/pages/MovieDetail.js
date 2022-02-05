import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'

export const MovieDetail = () => {

  const [movie, setMovie] = useState({})

  const { id } = useParams()

  useEffect(()=>{
    const getOneMovie = async() => {
      const { data } = await axios.get(`https://ironrest.herokuapp.com/favoriteMoviesExample/${id}`)
      setMovie(data)
    }
    getOneMovie()
  },[id])

  return <div> detalhes do filme {movie.name}</div>;
};
