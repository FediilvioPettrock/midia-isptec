import styles from './Cadastro.module.css';
import Linker from '../components/Linker'
import Navbar from '../components/Navbar';
function Cadastro(){
    return(
        <div className={styles.Cadastro_container}>
        <Navbar/>

        <div className={styles.Rigth_div}>
            <h2>Registo</h2>
            <form>
            <div className={styles.Container1}>
                <div className={styles.Separador}>
                    <label for="nome">Nome Completo</label>
                    <input type='text'/>
                </div>
               <div className={styles.Separador}>
               <label for="username">Username</label>
                <input type='text'/>
               </div>
            </div>
            
            <div className={styles.Container1}>
                <div className={styles.Separador}>
                <label for="email">Email</label>
                <input type='email'/>
                </div>
               <div className={styles.Separador}>
               <label for="Telefone">Contacto</label>
                <input type='text'/>                
               </div>
            </div>
   
            <div className={styles.Container1}>
                <div className={styles.Separador}>
                    <label for="bi">Numero do BI</label>
                    <input type='text'/>
                </div>
               <div className={styles.Separador}>
                    <label for="Foto">Foto</label>
                    <input type='file'/>               
               </div>
            </div>

            <div className={styles.Container1}>
                <div className={styles.Separador}>
                    <label for="password">Password</label>
                    <input type='password'/>
                </div>

               <div className={styles.Separador}>
                    <label for="confirmacao">Confirme a Password</label>
                    <input type='password'/>             
               </div>
            </div>

                <div className={styles.SendButton}>
                  <button type="submit">Registar</button>    
                </div>
            </form>
            <hr/>
            <Linker rota="/Login" message="Já possui uma conta?"/>
        </div>
    </div> 
    )
}

export default Cadastro