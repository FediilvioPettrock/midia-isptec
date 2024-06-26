import styles from "./UserPage.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Card from "../components/Card"


function UserPage() {
  const [isExpended, setExpendedStatus] = useState(false);
  const menuItems = [
    {
      text: "Início",
      icon: "icons/grid.svg",
    },
    {
      text: "Playlist",
      icon: "icons/user.svg",
    },
    {
      text: "Grupos",
      icon: "icons/search.svg",
    },
  ];
  return (
    <div className={styles.userpage_container}>
      <div
        className={`${styles.side_nav_container} ${
          !isExpended ? styles.side_nav_container_NX : ""
        }`}
      >
        <div className={styles.nav_upper}>
          <div className={styles.nav_heading}>
            <div className={styles.nav_brand}>
              <img src="icons/video-camera.png" alt="karapinha" />
              <h2>ISPMedia</h2>
            </div>
            <button
              className={`${styles.hamburger} ${
                isExpended ? styles.hamburger_in : styles.hamburger_out
              }`}
              onClick={() => setExpendedStatus(!isExpended)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className={styles.nav_menu}>
            {menuItems.map(({ text, icon }) => (
              <a
                href="#"
                className={`${styles.menu_item} ${
                  !isExpended ? styles.menu_item_NX : ""
                }`}
              >
                <img src={icon} alt="karapinha" />
                {isExpended && <p>{text}</p>}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.nav_footer}>
          {isExpended && (
            <div className={styles.nav_details}>
              <img src="icons/admin-avatar.svg" alt="not found" />
              <div className={styles.nav_footer_info}>
                <p className={styles.nav_footer_user_name}>Fedilvio</p>
                <p className={styles.nav_footer_user_position}>Cliente</p>
              </div>
            </div>
          )}
          <img className={styles.logout_icon} src="icons/logout.svg" />
        </div>
      </div>

      <div className={styles.userbody}>
        <div className={styles.usernav}>
          <div className={styles.search}>
            <input className={styles.search_bar} placeholder="Pesquisa" />
            <button className={styles.search_button}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>

        <div className={styles.title}>
          <h2>Playlists</h2>
        </div>

        <div 
            className={`${styles.play_list} ${
            !isExpended ? "" : styles.play_list_NX
          }`}
        >
            <Card titulo='ola Mundo' descricao="jiiwfb iweubf eicb sdoc "/> 
            <Card titulo='ola Mundo' descricao="jiiwfb iweubf eicb sdoc "/>
            <Card titulo='ola Mundo' descricao="jiiwfb iweubf eicb sdoc "/>
            <Card titulo='ola Mundo' descricao="jiiwfb iweubf eicb sdoc "/>
            <Card titulo='ola Mundo' descricao="jiiwfb iweubf eicb sdoc "/>
            <Card titulo='ola Mundo' descricao="jiiwfb iweubf eicb sdoc "/>
            <Card titulo='ola Mundo' descricao="jiiwfb iweubf eicb sdoc "/>
            <Card titulo='ola Mundo' descricao="jiiwfb iweubf eicb sdoc "/>
            <Card titulo='ola Mundo' descricao="jiiwfb iweubf eicb sdoc "/>
            <Card />
            <Card/>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
