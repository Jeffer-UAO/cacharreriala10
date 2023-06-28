import styles from "./NotFound.module.scss";
import { MdOutlineConstruction } from "react-icons/md";

export function PageNone(props) {
  const {title} = props;
  return (
    <div className={styles.notfound}>

      <MdOutlineConstruction size ={250}/>
      <h3>{title}</h3>
    </div>
  )
}
