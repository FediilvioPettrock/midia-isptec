import styles from './Linker.module.css'
import {Link} from 'react-router-dom'
function Linker({rota, message}){
    return  <Link to={rota} className={styles.myLink}><p>{message}</p></Link>
}
export default Linker