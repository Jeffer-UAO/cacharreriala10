import React, { useEffect, useState } from "react";
import { useCart } from "@/hooks/useCart";
import { Products } from "@/api/products";
import { Footer, FooterCart, ListCart, NotFound, Redes, Separator } from "@/components";
import { BasicLayout } from "@/layouts";
import { size } from "lodash";
import { BASE_NAME } from "@/config/constants";

const productCtrl = new Products();

export default function CartPage() {
  const { cart } = useCart("");
  const [product, setProduct] = useState("");
  const [load, setLoad] = useState(true);
  const hasProduct = size(product) > 0;

  const [newProduct, setNewProduct] = useState("");

  const identificadorUnico = generarIdentificadorUnico();

  useEffect(() => {
    (async () => {
      try {
        const data = [];
        for await (const item of cart) {
          const response = await productCtrl.getProductById(item.id);
          data.push({ ...response, quantity: item.quantity });
        }
        setProduct(data);
        setLoad(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [cart]);





  useEffect(() => {
    (async () => {
      try {
        const newObjectArray = [];
 
        for (const record of product) {
          const newRecord = {};

          for (const key in record) {
            if (
              Object.hasOwnProperty.call(record, key) &&
              ["name_extend", "quantity", "images", "ref"].includes(key)
            ) {
              newRecord[key] = record[key];
            }
          }

          newObjectArray.push({         
           Producto: newRecord.name_extend,
            Referencia: newRecord.ref,
            Cantidad: newRecord.quantity,
            Imagen: BASE_NAME + newRecord.images,          
          },);
        }
        const newArrayAsString = JSON.stringify(newObjectArray, null, 2);   

        setNewProduct( `Pedido No.  ${identificadorUnico} ${newArrayAsString}`);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [product]);

  return (
    <>
      <BasicLayout>
      <Redes />

        {load ? (
          <h1>Cargando ...</h1>
        ) : (
          <>
            {hasProduct ? (
              <ListCart product={product} />
            ) : (
              <NotFound
                title={"Uppss... en este momento no hay productos en el Carrito"}
              />
            )}
          </>
        )}

        <FooterCart product={newProduct}/>
        <Footer />
      </BasicLayout>
    </>
  );
}


function generarIdentificadorUnico() {
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numeros = '0123456789';

  let identificador = '';

  const letraAleatoria = letras[Math.floor(Math.random() * letras.length)];
  identificador += letraAleatoria;

  for (let i = 0; i < 4; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 10);
    identificador += numeros[numeroAleatorio];
  }

  

  return identificador;
}
