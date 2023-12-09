import styles from "./styles.module.scss";
import PrivacyItem from "./PrivacyItem";

const PrivacyPage = () => {
    return(
        <div className={styles.privacy}>
            <div className={styles.privacy__header}>
                <p className={styles.title}>
                    فوتبالیست دانش آموزی وزن سبک پرایمری
                </p>
                <p className={styles.desc}>
                    فدراسيون جهانی ربوکاپ، هدف نهايی ربوکاپ را تشکيل يک تيم کاملا هوشمند از ربات‌های انسان‌نما معرفی کرده که قرار است در سال ۲۰۵۰ برابر تيم قهرمان جام‌جهانی فوتبال به پيروزی دست يابد. پروژه امداد ربوکاپ نیز ارتقای تحقيقات در زمينه مسائل اساسی اجتماعی معرفی گردید که از اهداف اصلی آن استفاده مفيد از فن‌آوری برای کاهش خسارات جانی ناشی از وقوع بلايای طبيعی است. با توجه به افزایش چمشگیر تیم‌های متقاضی شرکت در مسابقات جهانی ربوکاپ، مسابقات ربوکاپ آزاد ایران به عنوان مسابقات مقدماتی مسابقات جهانی ربوکاپ هرساله برگزار می‌شود تا فضایی برای آماده‌سازی و تقویت تیم‌ها جهت شرکت در مسابقات جهانی باشد. علاوه براین برای گسترش دانش رباتیک و هوش‌مصنوعی تیم‌های نوپا این فرصت را پیدا می‌نمایند تا از تجربیات تیم‌های دیگر استفاده نمایند و بیشتر با این مسابقات آشنا شوند.
                </p>
            </div>
            <div className={styles.privacy__items + " flex flex-col"}>
                <PrivacyItem />
                <PrivacyItem />
                <PrivacyItem />
                <PrivacyItem />
                <PrivacyItem />
                <PrivacyItem />
                <PrivacyItem />
            </div>
        </div>
    )
}

export default PrivacyPage;