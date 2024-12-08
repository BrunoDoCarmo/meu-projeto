import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import styles from './Footer.module.css'

export function Footer() {
    return (
        <footer className={styles.social_list}>
            <ul>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>
        </footer>
    )
}