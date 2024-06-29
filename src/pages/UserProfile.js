import Card from "../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./UserAlbum.module.css";
import LeftNV from "../components/LeftNV";
import { useState } from "react";
import AlbumForm from "../components/AlbumForm";

// Componente que mostra as playlists
function UserProfile() {
  // Estado no componente pai para armazenar o estado do componente filho
  const [isChildExpended, setIsChildExpended] = useState(false);

  // Função de callback que será passada para o componente filho
  const handleChildStateChange = (newState) => {
    setIsChildExpended(newState);
  };

  return (
    <div className={styles.body_container}>
      <LeftNV onStateChange={handleChildStateChange} />
      <div className={styles.userbody}>
        <div className={styles.usernav}>
          <div className={styles.search}>
          </div>
        </div>

        <div className={styles.title}>
          <h2>Perfil Do Usuário</h2>
        </div>

        <div
          className={`${styles.album_list} ${
            !isChildExpended ? "" : styles.album_list_NX
          }`}
        >
        
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
