import styles from "../components/AddMembroForm.module.css";
import { useState } from "react";

function AddMembroForm() {
  const [membername, setMemberName] = useState("");
  const [groupname, setGroupName] = useState("");

  const handleAddMemberGroup = async (event) => {
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
      <h2>Adicionar membro</h2>
      <form onSubmit={handleAddMemberGroup}>
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

          <label htmlFor="Privacidade">Função</label>
          <select className={styles.privacidade}>
            <option value="apple">Visualizador</option>
            <option value="banana">Gestor</option>
          </select>

        </div>

        <div className={styles.options}>
          <button className={styles.confirm} type="submit">
            Adicionar
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

export default AddMembroForm;
