import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" classnName="link">
        <span className="logo"> logo </span>
      </NavLink>
      <div className="nav-links">
        <NavLink to="/movies-list" className="link">
          Listagem
        </NavLink>
        <NavLink to="/addmovie" className="link">
          Adicionar Filmes
        </NavLink>
      </div>
      <span className="movies-total">Filmes Listados - 0</span>
    </nav>
  );
};
