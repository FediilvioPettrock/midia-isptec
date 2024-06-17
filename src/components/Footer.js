import {FaFacebook, FaInstagram, FaLinkedin, FaTiktok} from 'react-icons/fa'
import styles from '../styles/Footer.module.css'
function Footer(){
 return(
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
         <li><FaFacebook/></li>
         <li><FaInstagram/></li>
         <li><FaLinkedin/></li>
         <li><FaTiktok/></li>
      </ul>
      <p className={styles.copy_right}><span>ISP Media Player &copy; 2024</span></p>
   </footer>     
 )
}

export default Footer