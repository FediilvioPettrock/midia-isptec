import styles from'./Login.module.css';
import salao from '../img/salao-beleza.jpg';
import Linker from '../components/Linker';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


  function Login() {
    const [email, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [categoria, setCategoria] = useState('Administrador'); // Adicionando categoria ao estado
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        console.log('Login attempt with:', { email, password, categoria });

        if (categoria === "Cliente") {
            localStorage.setItem("authenticated", true);
            navigate("/userpage", { replace: true });
        }
    };

    return (
        <div className={styles.Login_container}>
            <div className={styles.Left_div}>
                <img src={salao} alt='Salao'/>
            </div>
            <div className={styles.Rigth_div}>
                <h2>Login</h2>

                <form onSubmit={handleLogin}>
                    <label htmlFor="email">Email</label>
                    <input
                        type='email'
                        id='email'
                        value={email}
                        onChange={(e) => setUserEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <label htmlFor="categoria">Categoria</label>
                    <select
                        id="categoria"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)} // Atualizando categoria ao selecionar
                    >
                        <option value="Administrador">Administrador</option>
                        <option value="Cliente">Cliente</option>
                        <option value="Administrativo">Administrativo</option>
                    </select>

                    <button type="submit">Entrar</button>

                    <hr/>
                </form>
                <Linker rota="/cadastro" message="Ainda não Possui uma conta?"/>
            </div>
        </div>
    );
}


export default Login