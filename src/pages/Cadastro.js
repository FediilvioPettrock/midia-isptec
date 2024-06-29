import styles from "./Cadastro.module.css";
import Linker from "../components/Linker";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { register } from "../server/authentication";
import { useState } from "react";

import styles from './Cadastro.module.css';
import Linker from '../components/Linker'
function Cadastro(){

    
    return(
        <div className={styles.Cadastro_container}>

function Cadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // Adicionando categoria ao estado
  const [role, seRole] = useState(""); // Adicionando categoria ao estado
  const navigate = useNavigate();

  const handleUserRegister = async (event) => {
    event.preventDefault();
    try {
      const data = await register(email, password, username, null);
      console.log(data);
      navigate("/userpage", { replace: true });
    } catch (error) {
      console.error(error);
    }
    // if (categoria === "Cliente") {
    //     localStorage.setItem("authenticated", true);
    //     navigate("/userpage", { replace: true });
    // }
  };

  return (
    <div className={styles.Cadastro_container}>
      <div className={styles.Rigth_div}>
        <h2>Registo</h2>
        <form onSubmit={handleUserRegister}>

          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
  
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            <button type="submit">Guardar</button>
        <span> <Linker rota="/Login" message="Já possui uma conta?" /> </span>
        </form>
        <hr />
        
      </div>
    </div>
  );
}

export default Cadastro;
