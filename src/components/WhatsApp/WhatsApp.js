import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

import styles from "./WhatsApp.module.scss";

export function WhatsApp({ phoneNumber, message }) {
  const generateWhatsAppLink = () => {
    const url = `https://wa.me/${phoneNumber}`;
    const encodedMessage = encodeURIComponent(message);
    return `${url}?text=${encodedMessage}`;
  };

  return (
    <a
      className={styles.btnwsp}
      href={generateWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.whatsapp}>
        <AiOutlineWhatsApp />
      </div>
    </a>
  );
}
