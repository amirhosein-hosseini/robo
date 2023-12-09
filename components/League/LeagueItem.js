import styles from "./styles.module.scss";

const LeagueItem = () => {
    return(
        <div className={styles.leagueitem}>
            <div className={styles.leagueitem__image}>
                <img src="../../images/item-image.jpg" alt="image" />
            </div>
            <div className={styles.leagueitem__desc}>
                <p>
                    لیگ روبات‌های فوتبالیست یکی از رشته‌های مهم مسابقات روبوکاپ جهانی در بخش دانش‌آموزی است که به‌دلیل موضوع فوتبال برای مخاطبان بسیار هیجان‌انگیز و جذاب است.
                </p>
            </div>
            <div className={styles.leagueitem__button}>
                <p>
                    مشاهده
                </p>
            </div>
        </div>
    )
}

export default LeagueItem;