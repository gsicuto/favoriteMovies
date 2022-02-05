import { NavBar } from "./components/NavBar"
import {Route, Routes} from 'react-router-dom'
import {Home} from "./pages/Home"
import { List } from './pages/List'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { NewMovie } from "./pages/NewMovie"
import { MovieDetail } from "./pages/MovieDetail"


function App() {

  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const { data } = await axios.get('http://localhost:8000/movies')
    setMovies(data)
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies-list" element={<List movies={movies} getMovies={getMovies} />} />
        <Route path="/addmovie" element={<NewMovie/>} />
        <Route path="/movie/:id" element={<MovieDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
