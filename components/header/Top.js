import styles from "./styles.module.scss";
import { FaFlagUsa } from "react-icons/fa";

export default function Top() {
  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li>
            <FaFlagUsa size={24}/>
          </li>
        </ul>
      </div>
    </div>
  );
}
