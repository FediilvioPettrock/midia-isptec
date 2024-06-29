import styles from "../components/GroupForm.module.css";
import { useState } from "react";

function GroupForm() {
  const [groupname, setGroupName] = useState("");
  const handleAddGroup = async (event) => {
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
      <h2>Novo Grupo</h2>
      <form onSubmit={handleAddGroup}>
        <div className={styles.titlediv}>
          <label htmlFor="Titulo ">Nome </label>
          <input
            type="text"
            name="None"
            value={groupname}
            onChange={(e) => setGroupName(e.target.value)}
          />

          <label htmlFor="Descricao ">Descrição</label>
          <input
            type="text"
            name="None"
            value={groupname}
            onChange={(e) => setGroupName(e.target.value)}
          />

          <label htmlFor="Privacidade">Privacidade</label>
          <select className={styles.privacidade} name="fruits">
            <option value="apple">Público</option>
            <option value="banana">Privado</option>
          </select>
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

export default GroupForm;
