import React, { useEffect, useState } from "react";
import { map } from "lodash";
import { BASE_NAME } from "@/config/constants";

import { CardImg, CardTitle } from "reactstrap";
import styles from "./DetailProduct.module.scss";
import { WhatsApp } from "../WhatsApp";

export function DetailProduct(props) {
  const [productData, setProductData] = useState("");
  const { product, relate } = props;

  useEffect(() => {
    setProductData(product[0]);
  }, []);

  const changeDetail = (data) => {
    setProductData(data);
    window.scrollTo(0, 0);
  };

  if (product) {
    return (
      <div className={styles.detailProduct}>
        <div className={styles.product} id="seccion-1">
          <CardImg alt="Card image cap" src={BASE_NAME + productData.images} />

          <div className={styles.description}>
            <CardTitle className={styles.title}>
              <h5 className={styles.name_extend} >{productData.name_extend}</h5>
              <div className={styles.price}>
                {productData.price2 > 0 && (
                  <h6>Por mayor $ {productData.price2}</h6>
                )}
                {productData.price1 > 0 && (
                  <h6>Al detal $ {productData.price1}</h6>
                )}
              </div>
            </CardTitle>
            <p>{productData.description}</p>

            <div className={styles.whatsapp}>
              <WhatsApp
                phoneNumber="+573112884317"
                message={
                  BASE_NAME +
                  productData.images +
                  " " +
                  productData.name_extend +
                  " " +
                  "Referencia: " +
                  productData.ref
                }
              />
            </div>
          </div>
        </div>

        <div className={styles.relate}>
          <p>PRODUCTOS RELACIONADOS</p>

          <div className={styles.list}>
            {map(relate, (product, index) => (
              <div
                key={index}
                className={styles.list__product2}
                onClick={() => changeDetail(product)}
              >
                <CardImg
                  alt="Card image cap"
                  src={BASE_NAME + product.images}
                />

                <div className={styles.name}>
                  <CardTitle>
                    <h5>
                      {product.name} {product.name_extend}
                    </h5>
                    {product.price1 !== null && <h6>$ {product.price1}</h6>}
                  </CardTitle>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <h5> La pagina no existe</h5>;
  }
}
