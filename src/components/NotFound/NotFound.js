import styles from "./NotFound.module.scss";
import { SiNotepadplusplus } from "react-icons/si";

export function NotFound(props) {
  const {title} = props;
  return (
    <div className={styles.notfound}>

      <SiNotepadplusplus size ={360}/>
      <h3>{title}</h3>
    </div>
  )
}
