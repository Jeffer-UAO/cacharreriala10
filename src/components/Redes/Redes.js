import React from "react";
import styles from "./Redes.module.scss";
import { IoLogoWhatsapp } from "react-icons/io";
import { GiRotaryPhone } from "react-icons/gi";

export function Redes() {
  return (
    <div className={styles.space}>
      <div className={styles.phone}>
        <p>
          <IoLogoWhatsapp size="20" color="#63f945" /> 311 288 4317 - 311 703
          2388
        </p>
        <p>
          <GiRotaryPhone color="#ff0202" size="22" /> 885 5203
        </p>
      </div>
    </div>
  );
}
