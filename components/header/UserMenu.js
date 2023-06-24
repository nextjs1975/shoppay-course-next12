import Link from "next/link";
import styles from "./styles.module.scss";

export default function UserMenu({ loggedIn }) {
  return (
    <div className={styles.menu}>
      <h4>Welcome to Shoppay</h4>
      {loggedIn ? (
        <div className={styles.flex}>
          <img
            src="./images/user/comments-6.jpg"
            alt="User profile image"
            className={styles.menu__img}
          />
          <div className={styles.col}>
            <span>Welcome Back.</span>
            <h3>Pornchai</h3>
            <span>Sign Out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outline}>Login</button>
        </div>
      )}
      <ul className={styles.user__menu}>
        <li className={styles.user__menu_item}>
            <Link href="/profile">Account</Link>
        </li>
        <li className={styles.user__menu_item}>
            <Link href="/profile">My Order</Link>
        </li>
        <li className={styles.user__menu_item}>
            <Link href="/profile">Message Center</Link>
        </li>
        <li className={styles.user__menu_item}>
            <Link href="/profile">Address</Link>
        </li>
        <li className={styles.user__menu_item}>
            <Link href="/profile">Wishlist</Link>
        </li>
      </ul>
    </div>
  );
}
