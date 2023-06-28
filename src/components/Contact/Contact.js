import styles from "./Contact.module.scss";
import { FooterApp } from "../FooterApp";

export function Contact() {
  return (
    <>
      <div className={styles.container}>
        <h1>CACHARRERIA LA 10</h1>
        <div className={styles.phone}>
        <h5>Líneas de atención</h5>
        <ul>
          <li>(+57) 320 758 7325</li>
          
        </ul>
      </div>

      <div className={styles.adress}>
        <h5>Ubicación:</h5>
        <p>Carrera 10 # 14-11</p>
      </div>
      </div>
      <FooterApp />
    </>
  );
}
