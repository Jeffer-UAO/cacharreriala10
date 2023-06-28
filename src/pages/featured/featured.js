import {
  Footer,
  FooterApp,
  Exclusive,
  NotFound,
  Redes,
} from "@/components";
import { size } from "lodash";
import { BasicLayout } from "@/layouts";
import React from "react";

export default function FeaturedPage(props) {
  const { products } = props;
  const hasProduct = size(products) > 0;

  return (
    <>
      <BasicLayout>
      <Redes />
        {hasProduct ? (
          <Exclusive products={products} />
        ) : (
          <NotFound
            title={"Uppss... en este momento no hay productos Destacados"}
          />
        )}

        <FooterApp />
        <Footer />
      </BasicLayout>
    </>
  );
}
