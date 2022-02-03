import { NavBar } from "./components/NavBar"
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import { List } from './pages/List'

const movies = [
  {
    id: 1,
    name: 'The Lobster',
    ano: 2015,
    genero: ['comedia', 'drama', 'romance'],
    sinopse: 'Distopia sobre relacionamentos',
    score: 8
  },
  {
    id: 2,
    name: 'Rocky',
    ano: 1976,
    genero: ['drama', 'esporte'],
    sinopse: 'Subindo a escada com musica bonita',
    score: 6
  },
]

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movies-list' element={<List movies={ movies } />}/>
      </Routes>
    </div>
  );
}

export default App;
