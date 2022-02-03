import { useState, useEffect } from "react";
import { NavBar } from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { List } from "./pages/List";

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const { data } = await axios.get("http://localhost:8000/movies");
    setMovieList(data);
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies-list" element={<List movies={movieList} />} />
      </Routes>
    </div>
  );
}

export default App;
