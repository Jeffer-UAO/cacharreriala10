export { default } from "./product";
import { Products } from "@/api/products";

export async function getServerSideProps(context) {
  const { params } = context;
  const { product } = params;

  const productCtrl = new Products();
  const responseProduct = await productCtrl.getProductBySlug(product);

  const responseProductRelate = await productCtrl.getProductByName(
    responseProduct[0]?.flag
  );
 
    return {
      props: {
        product: responseProduct,
        relate: responseProductRelate,
      },
    };
 
}
