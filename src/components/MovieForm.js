import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Alert } from './Alert';

export const MovieForm = () => {

  const [name, setName] = useState('')
  const [ano, setAno] = useState('')
  const [sinopse, setSinopse] = useState('')
  const [score, setScore] = useState(0)
  const [genero, setGenero] = useState('')
  const [image, setImage] = useState('')

  const[alert, setAlert] = useState('')

  const createMovie = async (e) => {
    e.preventDefault();

    if(name === ''){
      setAlert('Nome do Filme não pode estar vazio')
      setTimeout(()=>{ setAlert('')}, 2000)
    }
    else{
      const newMovie = {
        name,
        ano,
        sinopse,
        score: Number(score),
        genero: genero.split(',').map(e => e.trim()),
        image
      }
      await axios.post('http://localhost:8000/movies', newMovie);
    }
    
  }

  return (
    <>
      {alert !== '' ? <Alert>{alert}</Alert> : null}
      <form onSubmit={createMovie}>
        <input type='text' placeholder='ImageURL' value={image}
          onChange={({ target:{ value } }) => setImage(value)}
        />
        <input type='text' placeholder='Movie Name' value={name} 
          onChange={(e) => setName(e.target.value)}
        />
        <input type='text' placeholder='Release Year' value={ano} 
          onChange={(e)=> setAno(e.target.value)}
        />
        <input type='text' placeholder='Genres separated with ","' value={genero} 
          onChange={({ target: { value }})=> setGenero(value)}
        />
        <textarea placeholder='Sinopses' value={sinopse} 
          onChange={({target})=> setSinopse(target.value)}
        ></textarea>
        <input type='number' min='0' max='5' placeholder='Score of movie' value={score} 
          onChange={(e)=> setScore(e.target.value)}
        />
        {/* <input type='button' value='SAVE' onClick={}/> */}
        <button type='submit'>Save</button>
      </form>
    </>);
};
