import { NavBar } from "./components/NavBar"
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import { List } from './pages/List'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movies-list' element={<List />}/>
      </Routes>
    </div>
  );
}

export default App;
