import Link from "next/link";
import styles from "./styles.module.scss";

const SigninPage = () => {
    return(
        <div className={styles.signin}>
            <p className={styles.signin__title}>
                ثبت نام
            </p>
            <form className={styles.signin__form}>
                <div className={styles.formgroup}>
                    <label>
                        نام
                    </label>
                    <input type="text" />
                </div>
                <div className={styles.formgroup}>
                    <label>
                        شماره تلفن
                    </label>
                    <input type="text" />
                </div>
                <div className={styles.formgroup}>
                    <label>
                        ایمیل
                    </label>
                    <input type="text" />
                </div>
                <div className={styles.twoformgroup}>
                    <div className={styles.formgroup}>
                        <label>
                            رمزعبور
                        </label>
                        <input type="text" /> 
                    </div>
                    <div className={styles.formgroup}>
                        <label>
                            تکرار رمزعبور
                        </label>
                        <input type="text" /> 
                    </div>
                </div>
                <div className={styles.button}>
                    <button>
                        ثبت نام
                    </button>
                </div>
                <Link href="/login" className={styles.gotologin}>
                    آیا از قبل ثبت نام کرده اید؟
                </Link>
            </form>
        </div>
    )
}

export default SigninPage;