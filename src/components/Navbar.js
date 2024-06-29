import {Link} from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.module.css'
import logo from '../img/logo.png'
import LinkButton from './LinkButton';

function Navbar(){
 return(
    <nav className={styles.navbar}>
      <Container>
       <Link to="/">
            <img src={logo} alt="Karapinha"/>
       </Link>
       <ul className={styles.list}>
            <li className={styles.item}> <Link to="/">Home</Link> </li>
            <li className={styles.item}> <Link to="/company">Listas de reprodução</Link></li>
            <li className={styles.item}><a href="#servicos">Explorar</a></li>
            <li className={styles.item}> <Link to="/contact">Contactos</Link> </li>
            {/*<li className={styles.cadastro}> <Link to="/cadastro">Cadastrar</Link></li>*/}
            <li><LinkButton to="/login" text="Entrar" color="#222"/></li>

       </ul>
      </Container>  
    </nav>     
 )
}

export default Navbar