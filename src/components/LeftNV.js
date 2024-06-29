import styles from "./LeftNV.module.css";
import { useState } from "react";
import { Link } from 'react-router-dom';

function LeftNV({ onStateChange }) {
  const [isExpended, setExpendedStatus] = useState(false);
  //const [selectedCardId, setSelectedCardId] = useState(null);

  const handleClick = () => {
    const newState = !isExpended;
    setExpendedStatus(newState);
    onStateChange(newState); // Envia o novo estado para o componente pai
  };

  const menuItems = [
    {
      id: 1,
      text: "Perfil",
      icon: "icons/user.svg",
      path: "/perfil",
    },
    {
      id: 2,
      text: "Playlist",
      icon: "icons/folder.svg",
      path: "/playlist",
    },
    {
      id: 3,
      text: "Grupos",
      icon: "icons/search.svg",
      path: "/usergroup",
    },

    {
      id: 4,
      text: "Albuns",
      icon: "icons/search.svg",
      path: "/useralbum",
    },

    {
      id: 5,
      text: "Rádio",
      icon: "icons/search.svg",
      path: "/radio",
    },
  ];

  /* Função para lidar com o clique no card
  const handleCardClick = (cardId) => {
    console.log(`Card clicked: ${cardId}`);
    setSelectedCardId(cardId);
  };
*/

  return (
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
            onClick={handleClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={styles.nav_menu}>
          {menuItems.map(({ id, text, icon, path }) => (
            <Link
              key={id}
              to={path}
              className={`${styles.menu_item} ${
                !isExpended ? styles.menu_item_NX : ""
              }`}
            >
              <img src={icon} alt="icone" />
              {isExpended && <p>{text}</p>}
            </Link>
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
  );
}

export default LeftNV;
