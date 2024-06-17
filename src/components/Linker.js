import styles from './Linker.module.css'
import {Link} from 'react-router-dom'
function Linker({route, message}){
    return  <Link to={route} className={styles.myLink}><p>{message}</p></Link>
}
export default Linker