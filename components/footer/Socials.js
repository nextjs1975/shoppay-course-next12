import styles from "./styles.module.scss";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { BsInstagram, BsPinterest, BsSnapchat, BsTwitter, BsYoutube } from "react-icons/bs";
import Link from "next/link";

export default function Socials() {
  return (
    <div className={styles.footer__socials}>
      <section>
        <h1>STAY CONNECTED</h1>
        <ul>
          <li>
            <Link href="/">
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link href="/">
              <BsInstagram />
            </Link>
          </li>
          <li>
            <Link href="/">
              <BsTwitter />
            </Link>
          </li>
          <li>
            <Link href="/">
              <BsYoutube />
            </Link>
          </li>
          <li>
            <Link href="/">
              <BsPinterest />
            </Link>
          </li>
          <li>
            <Link href="/">
              <BsSnapchat />
            </Link>
          </li>
          <li>
            <Link href="/">
              <FaTiktok />
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
