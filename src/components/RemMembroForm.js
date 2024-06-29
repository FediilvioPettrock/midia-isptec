import styles from "../components/RemMembroForm.module.css";
import { useState } from "react";

function RemMembroForm() {
  const [membername, setMemberName] = useState("");
  const [groupname, setGroupName] = useState("");

  const handleRemMemberGroup = async (event) => {
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
      <h2>Remover membro</h2>
      <form onSubmit={handleRemMemberGroup}>
        <div className={styles.titlediv}>
          <label htmlFor="Privacidade">Nome do Usuário</label>
          <select className={styles.privacidade}>
            <option value="apple">Antonio</option>
            <option value="banana">João</option>
          </select>

          <label htmlFor="Privacidade">Nome do Grupo</label>
          <select className={styles.privacidade}>
            <option value="apple">Meu grupo 1</option>
            <option value="banana">Meu grupo 2</option>
          </select>
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

export default RemMembroForm;
