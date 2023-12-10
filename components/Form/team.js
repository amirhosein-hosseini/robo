import styles from "./styles.module.scss";

const Team = () => {
    return(
        <div className={styles.formpage}>
            <div className={styles.formpage__title}>
                <p>
                    لطفا اطلاعات تیم خود را وارد کنید
                </p>
                <form className={styles.formpage__form}>
                    <div className={styles.twoformgroup}>
                        <div className={styles.formgroup}>
                            <label>
                                نام
                            </label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className={styles.twoformgroup}>
                        <div className={styles.formgroup}>
                            <label>
                                کشور
                            </label>
                            <input type="text" />
                        </div>
                        <div className={styles.formgroup}>
                            <label>
                                منطقه
                            </label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className={styles.twoformgroup}>
                        <div className={styles.formgroup}>
                            <label>
                                پیش شماره
                            </label>
                            <input type="text" />
                        </div>
                        <div className={styles.formgroup}>
                            <label>
                                تلفن ثابت
                            </label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className={styles.twoformgroup}>
                        <div className={styles.formgroup}>
                            <label>
                                تلفن همراه
                            </label>
                            <input type="text" />
                        </div>
                        <div className={styles.formgroup}>
                            <label>
                                ایمیل
                            </label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className={styles.twoformgroup}>
                        <div className={styles.formgroup}>
                            <textarea />
                        </div>
                        <div className={styles.formgroup}>
                            <label>
                                کد پستی
                            </label>
                            <input type="text" />
                        </div>    
                    </div>
                    <div className={styles.formbutton}>
                        <button>
                            مرحله بعد
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Team;