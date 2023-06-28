import React, { useEffect, useState } from "react";
import { Categories } from "@/api/category";
import { Products } from "@/api/products";
import {
  ListCategories,
  Footer,
  Promotion,
  Exclusive,
  FooterApp,
  Redes,
} from "@/components";

import { BasicLayout } from "../../layouts";

const categoriesCtrl = new Categories();
const productsCtrl = new Products();

export default function HomePage() {
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await categoriesCtrl.getAll();
        setCategories(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await productsCtrl.getProductByOfertAndExclusive();
        setProducts(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (products !== null) {
    return (
      <>
        <BasicLayout>
          <Redes />
          <ListCategories categories={categories} />

          <Promotion products={products} />
          <hr />
          <Exclusive products={products} />

          <FooterApp />
          <Footer />
        </BasicLayout>
      </>
    );
  } else {
    return (
      <>
        <BasicLayout>
          <ListCategories categories={categories} />
          <FooterApp />
          <Footer />
        </BasicLayout>
      </>
    );
  }
}
