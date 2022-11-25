import Link from "next/link";
import styles from "../styles/footer.module.scss";
export default function Footer() {

    return (
        <div className="footer">           
            <div className="footer-items">
                <Link href="telegram.com" className={styles.footerIcons}><i className="fab fa-telegram-plane text-2xl p-10"></i></Link>
                <Link href="twitter.com" className={styles.footerIcons}><i className="fab fa-twitter text-2xl p-10"></i></Link>
                <Link href="linkedin.com" className={styles.footerIcons}><i className="fab fa-linkedin text-2xl p-10"></i></Link>
            </div>
            <p className="text-mark">Powered by vSelf</p>
        </div>
    )
}