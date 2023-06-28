import Link from "next/link";
import { CardImg, CardTitle } from "reactstrap";
import { BASE_NAME } from "@/config/constants";
import styles from "./Retail.module.scss";
import { map } from "lodash";

export function Exclusive(props) {
  const { products } = props;

  return (
    <div className={styles.content}>
      <h5>Te va a encantar</h5>

      <div className={styles.listExclusive}>
        {map(
          products,
          (product, index) =>
            product.home && (
              <Link
                key={index}
                href={`/${product.slug}`}
                className={styles.list__product}
              >
                <CardImg
                  alt="Card image cap"
                  src={BASE_NAME + product.images}
                />

                <div className={styles.product}>
                  <CardTitle className={styles.title}>
                    <h5>
                      {product.name} {product.name_extend}
                    </h5>
                    <h6>$ {product.price1}</h6>
                  </CardTitle>
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
}
