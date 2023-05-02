import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to="/aluno" >
        <button>Aluno</button>
      </Link>
      <Link to="/professor">
        <button>Profesor</button>
      </Link>
    </div>
  )
}

export default Navbar