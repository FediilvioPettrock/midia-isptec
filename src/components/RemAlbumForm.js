import styles from "../components/RemAlbumForm.module.css";
import { useState } from "react";

function RemAlbumForm() {
  const [Albumname, setAlbumName] = useState("");
  const handleAddAlbum = async (event) => {
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
      <h2>Remover Album</h2>
      <form onSubmit={handleAddAlbum}>
        <div className={styles.titlediv}>
          <label htmlFor="Titulo ">Titulo</label>
          <input
            type="text"
            name="None"
            value={Albumname}
            onChange={(e) => setAlbumName(e.target.value)}
          />
        </div>

        <div className={styles.options}>
          <button className={styles.confirm} type="submit">
            Remover
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

export default RemAlbumForm;
