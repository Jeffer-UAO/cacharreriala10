import styles from "./TopBar.module.scss";
import { CardImg } from "reactstrap";
import Link from "next/link";

export function TopBar() {
  return (
    <div className={styles.topBarComponent}>
      <div className={styles.topBar}>
        <Link href="/">
          <CardImg src="/image/logoc10.png" alt="" />{" "}
        </Link>
        <div className={styles.title}>

        <h1 className={styles.name}>CACHARRERIA LA 10</h1>
        </div>
      </div>
    </div>
  );
}
