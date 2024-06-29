import styles from "../components/MusicForm.module.css";
import { useState } from "react";

function MusicForm({ onClose }) {
  const [Musicname, setMusicName] = useState("");
  const [description, setDescription] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [publisher, setPublisher] = useState("");
  const [composer, setComposer] = useState("");
  const [genre, setGenre] = useState("");
  const [artist, setArtist] = useState("");

  const handleAddMusic = async (event) => {
    event.preventDefault();
    try {
      // Lógica para adicionar música
      console.log({
        Musicname,
        description,
        lyrics,
        publisher,
        composer,
        genre,
        artist,
      });
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.minhadiv}>
      <h2>Nova Música</h2>
      <form onSubmit={handleAddMusic}>
        <div className={styles.titlediv}>
          <div className={styles.divcamp}>
            <div className={styles.divsubcamp}>
              <label htmlFor="Titulo">Titulo</label>
              <input
                type="text"
                name="Titulo"
                value={Musicname}
                onChange={(e) => setMusicName(e.target.value)}
              />
            </div>
            <div className={styles.divsubcamp}>
              <label htmlFor="Descricao">Descrição</label>
              <input
                type="text"
                name="Descricao"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.divcamp}>
            <div className={styles.divsubcamp}>
              <label htmlFor="Letra">Letra</label>
              <input
                type="text"
                name="Letra"
                value={lyrics}
                onChange={(e) => setLyrics(e.target.value)}
              />
            </div>

            <div className={styles.divsubcamp}>
              <label htmlFor="Publicadora">Publicadora</label>
              <input
                type="text"
                name="Publicadora"
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.divcamp}>
            <div className={styles.divsubcamp}>
              <label htmlFor="Compositor">Compositor</label>
              <input
                type="text"
                name="Compositor"
                value={composer}
                onChange={(e) => setComposer(e.target.value)}
              />
            </div>
            <div className={styles.divsubcamp}>
              <label htmlFor="Genero">Gênero</label>
              <select
                className={styles.privacidade}
                name="Genero"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              >
                <option value="">Selecione um gênero</option>
                <option value="Rap">Rap</option>
                <option value="Kuduro">Kuduro</option>
              </select>
            </div>
          </div>

          <div className={styles.divcamp}>
            <div className={styles.divsubcamp}>
              <label htmlFor="Artista">Artista</label>
              <input
                type="text"
                name="Artista"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
              />
            </div>

            <div className={styles.divsubcamp}>
              <label htmlFor="Ficheiro">Ficheiro</label>
              <input
                type="file"
                name="Ficheiro"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
              />
            </div>


          </div>
        </div>

        <div className={styles.options}>
          <button className={styles.confirm} type="submit">
            Guardar
          </button>
          <button
            className={styles.cancel}
            type="button"
            onClick={onClose}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default MusicForm;

