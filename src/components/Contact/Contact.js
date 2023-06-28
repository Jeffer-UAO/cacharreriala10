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
          <li>(+57) 322 663 0481</li>
          <li>(+57) 313 600 8914</li>
          <li>(+602) 881 6111</li>
        </ul>
      </div>

      <div className={styles.adress}>
        <h5>Ubicación:</h5>
        <p>Calle 15# 9-36 frente a la estación del mio Petecuy</p>
      </div>
      </div>
      <FooterApp />
    </>
  );
}
