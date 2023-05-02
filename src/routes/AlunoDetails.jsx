import { useParams, useNavigate} from "react-router-dom"

const AlunoDetails = () => {
  
  const {id} = useParams();
  const navigate = useNavigate();

  const contato = () => {
    console.log("Mensagem Enviada");
    return navigate("/login");
  }

  return (
    <div>
      <h1>Exibindo informaçoes do aluno {id} </h1>
      <button onClick={contato}>Enviar</button>
    </div>
  )
}

export default AlunoDetails