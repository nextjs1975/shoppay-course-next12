import styles from "./styles.module.scss";
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { RiAccountPinCircleFill, RiArrowDropDownFill } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import UserMenu from "./UserMenu";

export default function Top() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li className={styles.top__menu}>
            <img src="./images/th.png" alt="thai" />
            <span>THB</span>
          </li>
          <li className={styles.top__menu}>
            <MdSecurity size={18} />
            <span>Buyer Protection</span>
          </li>
          <li className={styles.top__menu}>
            <span>Customer Service</span>
          </li>
          <li className={styles.top__menu}>
            <span>Help Care</span>
          </li>
          <li className={styles.top__menu}>
            <BsSuitHeart size={18} />
            <Link href="/profile/whishlist">
              <span>Whishlist</span>
            </Link>
          </li>
          <li className={styles.top__menu}>
            {loggedIn ? (
              <li>
                <div className={styles.flex}>
                  <img src="./images/user/comments-6.jpg" alt="user image" />
                  <span>Pornchai Sangpongpan</span>
                  <RiArrowDropDownFill size={18} />
                </div>
              </li>
            ) : (
              <li>
                <div className={styles.flex}>
                  <RiAccountPinCircleFill size={18} />
                  <span>Account</span>
                  <RiArrowDropDownFill size={18} />
                </div>
              </li>
            )}
            <UserMenu loggedIn={loggedIn}/>
          </li>
        </ul>
      </div>
    </div>
  );
}
