import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return <nav style={
      {
        display:'flex', 
        justifyContent:'space-between',
        height:'30px',
        backgroundColor:'steelblue'
      }}> 
    <NavLink to='/'><span> LOGO </span></NavLink>
    <div>
      <NavLink to='/movies-list'>Listagem</NavLink>
      <NavLink to='/addmovie'>Adicionar Filmes</NavLink>
    </div>
    <span>Filmes Listados - 0</span>
  </nav>;
};
