import {Link} from 'react-router-dom';


const Aluno = () => {
  return (
    <div>
        <h1>Pagina de Alunos</h1>
        <p>
            <Link to="/aluno/1"> Forma de contato 1</Link>
        </p>
        <p>
            <Link to="/aluno/2"> Forma de contato 2</Link>
        </p>
        <p>
            <Link to="/aluno/3"> Forma de contato 3</Link>
        </p>
    </div>
  );
};

export default Aluno;