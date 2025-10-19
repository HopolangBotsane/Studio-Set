import { Link } from "react-router";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.nav}>
                <Link className={styles.logo} to="/">
                    <img src="" alt="studio and Set logo" />
                </Link>
                <div className="nav-left">
                    <Link className={styles.headerLink} to="/about">Know Us</Link>
                    <Link className={styles.headerLink} to="/help">Help Center</Link>
                    <Link className={styles.headerLink} to="/login">Login</Link>
                </div>
        </div>

        <div className={styles.heroTitle}>
            <h1>
                Top-Quality Film Equipment for Rential Gear Up for Your Next Production
            </h1>
            <p>
               Ready to bring your vision to life? Explore our reliable, industry-standard equipment designed to meet filmmakers' highest demands. 
               Renting from us means access to expert advice, well-maintained gear, and support every step of the way. 
               Lights, camera, action—start renting with us today!
            </p>
        </div>
    </div>
  )
}

export default Header