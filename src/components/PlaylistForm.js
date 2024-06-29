import styles from "../components/PlaylistForm.module.css";
import { useState } from "react";

function PlaylistForm() {
  const [playlistname, setPlaylistName] = useState("");
  const handleAddPlaylist = async (event) => {
    event.preventDefault();
    try {
      //const data = await register(email, password, username, null);
      //console.log(data);
    } catch (error) {
      console.error(error);
    }
    // if (categoria === "Cliente") {
    //     localStorage.setItem("authenticated", true);
    //     navigate("/userpage", { replace: true });
    // }
  };

  return (
    <div className={styles.minhadiv}>
      <h2>Nova Playlist</h2>
      <form onSubmit={handleAddPlaylist}>
        <div className={styles.titlediv}>
          <label htmlFor="Titulo ">Titulo</label>
          <input
            type="text"
            name="Titulo"
            value={playlistname}
            onChange={(e) => setPlaylistName(e.target.value)}
          />
        </div>

        <div className={styles.options}>
          <button className={styles.confirm} type="submit">
            Guardar
          </button>
          <button className={styles.cancel} type="button">
            Cancelar
          </button>
        </div>
      </form>
      <hr />
    </div>
  );
}

export default PlaylistForm;
