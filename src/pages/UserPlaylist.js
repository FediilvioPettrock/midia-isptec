import Card from "../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./UserPlaylist.module.css";
import LeftNV from "../components/LeftNV";
import { useState } from "react";
import PlaylistForm from "../components/PlaylistForm";
import MusicForm from "../components/MusicForm"

// Componente que mostra as playlists
function UserPlaylist( ) {
  // Estado no componente pai para armazenar o estado do componente filho
  const [isChildExpended, setIsChildExpended] = useState(false);

  // Estado para armazenar o ID do card selecionado
  const [selectedCardId, setSelectedCardId] = useState(null);

  // Estado para controlar a visibilidade do PlaylistForm
  const [showPlaylistForm, setShowPlaylistForm] = useState(false);

  // Função de callback que será passada para o componente filho
  const handleChildStateChange = (newState) => {
    setIsChildExpended(newState);
  };

  // Atualiza o estado com o ID do card selecionado
  const handleCardClick = (cardId) => {
    console.log(`Card clicked: ${cardId}`);
    setSelectedCardId(cardId); // Atualiza o estado com o ID do card selecionado
  };

  // Função para alternar a visibilidade do PlaylistForm
  const togglePlaylistForm = () => {
    setShowPlaylistForm(!showPlaylistForm);
  };

  return (
    <div className={styles.body_container}>
      <LeftNV onStateChange={handleChildStateChange} />
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
          <button className={styles.search_button} onClick={togglePlaylistForm}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <div
          className={`${styles.play_list} ${
            !isChildExpended ? "" : styles.play_list_NX
          }`}
        >
          <Card
            titulo="Minhas musicas"
            descricao="jiiwfb iweubf eicb sdoc "
            onClick={() => handleCardClick(1)}
          />

          <Card titulo="Minhas musicas" descricao="Minhas musicas para relaxar " />
          <Card titulo="Minhas musicas" descricao="Minhas musicas para relaxar " />
          <Card titulo="Minhas musicas" descricao="Minhas musicas para relaxar " />
          <Card titulo="Minhas musicas" descricao="Minhas musicas para relaxar " />
          <Card titulo="Minhas musicas" descricao="Minhas musicas para relaxar " />
          <Card titulo="Minhas musicas" descricao="Minhas musicas para relaxar " />
          <Card titulo="Minhas musicas" descricao="Minhas musicas para relaxar " />
          <Card titulo="Minhas musicas" descricao="Minhas musicas para relaxar " />
        </div>
      </div>
      {showPlaylistForm && <PlaylistForm/>}
    </div>
  );
}

export default UserPlaylist;
