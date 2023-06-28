export { default } from "./featured";

import { Products } from "@/api/products"; 


export async function getServerSideProps() {

  const productCtrl = new Products();
  const responseProduct = await productCtrl.getProductByOfertAndExclusive()

  return {
    props: {
        products: responseProduct,
    },
  };
}
