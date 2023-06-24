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
            <h3>Pornchai Sangpongpan</h3>
            <span>Sign Out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button>Register</button>
          <button>Login</button>
        </div>
      )}
      <ul>
        <li>
            <Link href="/profile">Account</Link>
        </li>
        <li>
            <Link href="/profile">My Order</Link>
        </li>
        <li>
            <Link href="/profile">Message Center</Link>
        </li>
        <li>
            <Link href="/profile">Address</Link>
        </li>
        <li>
            <Link href="/profile">Wishlist</Link>
        </li>
        <li>
            <Link href="/profile"></Link>
        </li>
      </ul>
    </div>
  );
}
