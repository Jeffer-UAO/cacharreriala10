import { BasicLayout } from "@/layouts";
import { DetailProduct, FooterApp, Redes, Separator } from "@/components";
import { Footer } from "@/components";

export default function ProductPage(props) {
  const { product, relate } = props;

  return (
    <div>
      <BasicLayout>
        <Redes />
        <DetailProduct product={product} relate={relate} />
        <FooterApp />
        <Footer />
      </BasicLayout>
    </div>
  );
}
