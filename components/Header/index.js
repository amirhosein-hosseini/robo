import Link from "next/link";
import "./styles.css";

const Header = () => {
    return(
        <div class="nav">
            <div class="nav-wrapper">
                <nav>
                    <div class="nav-icon">                       
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 24 24" fill="none" stroke="currentColor"   stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </div>
                    <div class="nav-bgoverlay"></div>
                    <ul class="nav-list">
                        <div class="nav-close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        <div className="sign-button">
                            <Link href="https://barez.org/">
                                ثبت نام
                            </Link>
                        </div>
                        <div class="nav-listwrapper">
                            <li>
                                <a href="index.html" class="nav-link">خانه</a>
                            </li>
                            <li>
                                <a href="menu.html" class="nav-link">قوانین و مقررات</a>
                            </li>
                        </div>
                        <div className="logo">
                            <Link href="https://barez.org/">
                                <img src="../../images/logo.png" alt="logo" />
                            </Link>
                        </div>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;