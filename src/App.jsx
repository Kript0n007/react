
import './App.css'

import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import AlunoDetails from './routes/AlunoDetails.jsx';


function App() {
  return (
    <>
      <div className="App">
          <Outlet/>
      </div>
    </>
  )
}

export default App
