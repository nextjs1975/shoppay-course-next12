import styles from "./styles.module.scss";

export default function Payment() {
  return (
    <div className={styles.footer__payment}>
        <h3>We Accept</h3>
        <div className={styles.footer__flexwrap}>
            <img src="./images/payment/visa.webp" alt="payment method" />
            <img src="./images/payment/mastercard.webp" alt="payment method" />
            <img src="./images/payment/paypal.webp" alt="payment method" />
        </div>
    </div>
  )
}
