import styles from "./FooterCart.module.scss";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";


import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/router";


import { useCart } from "@/hooks/useCart";


export function FooterCart(props) {
  const { product } = props;
  const { deleteAllCart } = useCart();
  const router = useRouter();

  

  function handleClick(link) {
    router.push(link);
  }


  function confirmation() {
    const result = window.confirm('¿Está seguro de eliminar los productos del Carrito?');
    if (result) {
      deleteAllCart();
    } 
  }

  const generateWhatsAppLink = (phoneNumber, message) => {
    const url = `https://wa.me/${phoneNumber}`;
    const encodedMessage = encodeURIComponent(message);
    return `${url}?text=${encodedMessage}`;
  };

  return (
    <div className={styles.btnWhatsapp}>
      <div className={styles.paneluser}>
        <BiArrowBack onClick={() => handleClick("/")} size="35" color="grey" />

        <a
          className={styles.btnwsp}
          href={generateWhatsAppLink("+573112884317", product)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.whatsapp}>
            <AiOutlineWhatsApp size="35" />
          </div>
          <p>Enviar Listado</p>
        </a>
        <BsTrash3 size="25" color="grey" onClick={confirmation} />
      </div>
    </div>
  );
}



