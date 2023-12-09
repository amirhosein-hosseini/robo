import styles from "./styles.module.scss";
import Link from "next/link";

const PrivacyItem = () => {
    return(
        <div className={styles.privacy__items__item + " flex flex-col"}>
            <div className={styles.title}>
                <p>
                    معرفی لیگ فوتبالیست:
                </p>
            </div>
            <div className={styles.image}>
                <img src="../../images/item-image.jpg" alt="image" />
            </div>
            <div className={styles.desc}>
                <p>
                    لیگ روبات‌های فوتبالیست یکی از رشته‌های مهم مسابقات روبوکاپ جهانی در بخش دانش‌آموزی است که به‌دلیل موضوع فوتبال برای مخاطبان بسیار هیجان‌انگیز و جذاب است. در این رشته در هر بازی دو تیم متشکل از دو ربات متحرک مستقل در یک بازی فوتبال با یکدیگر رقابت می‌کنند. در واقع مسابقه فوتبال روباتها بین دو تیم به صورت 2 بر2 برگزار می‌شود. اعضای تیم باید روبات‌ها را به گونه‌ای طراحی نمایند که بتوانند توپ مخصوص بازی را شناسایی کرده و به سمت آن حرکت نمایند. همچنین نشانه‌های زمین را تشخیص دهند، مثلا دیواره‌ها، محدوده بازی و رنگ دروازه‌ها را تشخیص دهند و با الگوریتم‌های پیشرفته برنامه‌نویسی یک بازی با کیفیت و جذاب را به نمایش بگذارند.
                </p>
            </div>
            <div className={styles.files + " flex flex-col"}>
                <div className={styles.files__file + " flex"}>
                    <img src="../../images/file.png" alt="icon" />
                    <Link href="http://iranopenrobocup.ir/leagues/junior-soccer-lightweight-primary">
                        ROBOCUPJUNIOR 2024 SOCCER RULES
                    </Link>
                    <Link className={styles.filedownload} href="http://iranopenrobocup.ir/leagues/junior-soccer-lightweight-primary">
                        دانلود
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PrivacyItem;