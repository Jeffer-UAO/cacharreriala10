import { Categories } from "@/api/category";
import { Products } from "@/api/products";

export { default } from "./category";

export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;

  const categoryCtrl = new Categories();
  const responseCategory = await categoryCtrl.getBySlug(category);

  const productCtrl = new Products();
  const responseProduct = await productCtrl.getProductsByCategory(
    responseCategory.id
  );

  return {
    props: {
      category: responseCategory,
      products: responseProduct,
    },
  };
}
