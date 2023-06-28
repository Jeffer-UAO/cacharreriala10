import React from "react";
import styles from "./Redes.module.scss";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsShop } from "react-icons/bs";

export function Redes() {
  return (
    <div className={styles.space}>
      <div className={styles.phone}>
        <p>
          <IoLogoWhatsapp size="22" color="#63f945" /> 320 758 7325
        </p>
        <p>
          <BsShop color="#63f945" size="22" /> Carrera 10 # 14-11
        </p>
      </div>
    </div>
  );
}
