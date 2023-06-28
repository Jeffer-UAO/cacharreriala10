import {
  Footer,
  FooterApp,
  Promotion,
  NotFound,
  Separator,
  Redes,
} from "@/components";
import { size } from "lodash";
import { BasicLayout } from "@/layouts";
import React from "react";

export default function OfertPage(props) {
  const { products } = props;
  const hasProduct = size(products) > 0;

  return (
    <>
      <BasicLayout>
        <Redes />
        {hasProduct ? (
          <Promotion products={products} />
        ) : (
          <NotFound
            title={"Uppss... en este momento no hay productos en oferta"}
          />
        )}

        <FooterApp />
        <Footer />
      </BasicLayout>
    </>
  );
}
