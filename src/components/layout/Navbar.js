import { Link } from "react-router-dom"
import styles from './Navbar.module.css'

export function Navbar() {
    return (
        <ul className={styles.link}>
            <li className={styles.item}><Link to="/">Home</Link></li>
            <li className={styles.item}><Link to="/empresa">Empresa</Link></li>
            <li className={styles.item}><Link to="/contato">Contato</Link></li>
        </ul>
    )
}