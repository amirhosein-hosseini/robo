import Link from "next/link";
import styles from "../Signin/styles.module.scss";

const LoginPage = () => {
    return(
        <div className={styles.signin}>
        <p className={styles.signin__title}>
            ورود 
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
            <div className={styles.twoformgroup}>
                <div className={styles.formgroup}>
                    <label>
                        رمزعبور
                    </label>
                    <input type="text" /> 
                </div>
            </div>
            <div className={styles.button}>
                <button>
                    ورود
                </button>
            </div>
            <Link href="/signin" className={styles.gotologin}>
                آیا هنوز ثبت نام نکردید؟
            </Link>
        </form>
    </div>
    )
}

export default LoginPage;