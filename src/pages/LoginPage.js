import styles from'./Login.module.css';
import salao from '../img/salao-beleza.jpg';
import Linker from '../components/Linker';
import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { login } from '../server/authentication';
import { PageTitle } from '../styles/CenterColumn';
  function LoginPage() {
    const [email, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [categoria, setCategoria] = useState('Administrador'); // Adicionando categoria ao estado
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const data = await login (email, password);
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
                <img src={salao} alt='Salao'/>
            </div>
            <div className={styles.Rigth_div}>
                <PageTitle>Log into your account</PageTitle>

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

                    <button type="submit">Login</button>

                    <hr/>
                </form>
                <Linker route="/register" message="Create an account"/>
            </div>
        </div>
    );
}


export default LoginPage