import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="title-space">
        <span className="title">My Favorite Movies</span>
      </div>
      <div className="search-area">aqui terá o campo de busca</div>
      <div className="home-links">
        <NavLink to="/movies-list" className="link">
          Listagem
        </NavLink>
        <NavLink to="/addmovie" className="link">
          Adicionar Filmes
        </NavLink>
      </div>
    </section>
  );
};

export default Home;
