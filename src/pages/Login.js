import styles from "./Login.module.css";
import podcast from "../img/podcast.jpg";
import Linker from "../components/Linker";
import Navbar from "../components/Navbar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../server/authentication";

function Login() {
  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [categoria, setCategoria] = useState("Administrador"); // Adicionando categoria ao estado
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const data = await login(email, password);
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
    <div className={styles.Login_container}>
      <div className={styles.Left_div}>
        <img src={podcast} alt="Podcast" />
      </div>
      <div className={styles.Rigth_div}>
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Entrar</button>

          <hr />
        </form>
        <Linker rota="/cadastro" message="Ainda não Possui uma conta?" />
      </div>
    </div>
  );
}

export default Login;