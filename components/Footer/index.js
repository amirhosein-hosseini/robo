import Link from "next/link";
import styles from "./styles.module.scss";

const Footer = () => {
    return(
        <div className={styles.footer}>
            <div className={styles.footer__wrapper}>
                <div className={styles.desc}>
                    <p className={styles.title}>
                        درباره ما
                    </p>
                    <p>
                        لیگ روبات‌های فوتبالیست یکی از رشته‌های مهم مسابقات روبوکاپ جهانی در بخش دانش‌آموزی است که به‌دلیل موضوع فوتبال برای مخاطبان بسیار هیجان‌انگیز و جذاب است.
                    </p>
                </div>
                <div className={styles.links}>
                    <p className={styles.title}>
                        لینک ها
                    </p>
                    <Link href="https://zibaeslami.com/">
                        خانه
                    </Link>
                    <Link href="https://zibaeslami.com/">
                        لیگ ها
                    </Link>
                    <Link href="https://zibaeslami.com/">
                        ثبت نام
                    </Link>
                    <Link href="https://zibaeslami.com/">
                        قوانین و مقررات
                    </Link>
                </div>
                <div className={styles.namad}>
                    <p className={styles.title}>
                        نماد اعتماد
                    </p>
                    <img src="../../images/namad.png" alt="enamad" />
                </div>
            </div>
        </div>
    )
}

export default Footer;