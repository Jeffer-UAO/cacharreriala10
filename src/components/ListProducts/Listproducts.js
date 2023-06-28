import {
  CardImg,
  CardSubtitle,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { map } from "lodash";
import { BASE_NAME } from "@/config/constants";
import { WhatsApp } from "../WhatsApp";
import { toast } from "react-toastify";

import styles from "./ListProduts.module.scss";
import Link from "next/link";

import { useCart } from "@/hooks/useCart";
import { ModalBasic } from "../Common";
import { useState } from "react";

export function Listproducts(props) {
  const { products, title } = props;
  const { addCart, loading } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [idProduct, setIdPropduct] = useState();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const addProductId = (id) => {
    setIdPropduct(id);
    toggleModal();
  };

  const addData = () => {
    addCart(idProduct, quantity);

    toast.success("¡Se agrego con exito!");

    toggleModal();
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    setQuantity(value);
  };

  return (
    <div className={styles.listProduct}>
      <h4>{title}</h4>
      <div className={styles.list}>
        {map(products, (product, index) => (
          <div key={index} className={styles.list__product}>
            <div>
              <Link href={`/${product.productData.slug}`}>
                <CardImg
                  alt="Card image cap"
                  src={BASE_NAME + product.productData.images}
                />
              </Link>
              <div className={styles.product}>
                <CardTitle className={styles.title}>
                  <h5>{product.productData.name_extend}</h5>
                </CardTitle>

                <div className={styles.price}>
                  <CardSubtitle>
                    {product.productData.price2 > 0 && (
                      <h6>Por mayor $ {product.productData.price2}</h6>
                    )}
                    {product.productData.price1 > 0 && (
                      <h6>Al detal $ {product.productData.price1}</h6>
                    )}
                  </CardSubtitle>

                  <div>
                    <WhatsApp
                      phoneNumber="+573112884317"
                      message={
                        BASE_NAME +
                        product.productData.images +
                        " " +
                        product.productData.name_extend +
                        " " +
                        "Referencia: " +
                        product.productData.ref
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <Button
              color="primary"
              onClick={() => addProductId(product.productData.codigo)}
            >
              Agregar al Carrito
            </Button>
          </div>
        ))}
      </div>

      <Modal isOpen={isOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Ingrese Cantidad</ModalHeader>

        <ModalBody>
          Cantidad
          <FormGroup>
            <Input
              value={quantity}
              type="number"
              name="cantidad"
              id="cantidad"
              placeholder="Cantidad"
              onChange={handleQuantityChange}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={addData}>
            Aceptar
          </Button>{" "}
          <Button color="secondary" onClick={toggleModal}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
