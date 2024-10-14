import { FaUser, FaLock } from "react-icons/fa"
import { useState } from "react";
import './Login.css';


function login() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [userName, setUsername] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [password, setPassword] = useState("");

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    alert(`Enviando os dados: ${userName} + ${password}`)

  }

  return (
    <div className="container">

      <h1>Acesse o sistema</h1>

      <form onSubmit={handleSubmit}>
        
        <div className="input-field">
          <input type="email" placeholder='E-mail' onChange={(e) => setUsername(e.target.value)} />
          <FaUser className="icon" />
        </div>
        
        <div className="input-field">
          <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Continuar logado
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>

        <button>Entrar</button>

        <div className="signup-link">
          <p>
            Não tem uma conta? <a href="#"> Cadastre-se</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default login
