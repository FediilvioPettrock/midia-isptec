import styles from '../styles/LinkButton.module.css';
import {Link} from 'react-router-dom';

function LinkButton({to, text, color}){
    return(
        <Link className={styles.btn} to={to} style={{backgroundColor: color}}>
            {text}
        </Link>
    )
}
export default LinkButton