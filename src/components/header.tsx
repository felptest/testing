import Link from "next/link";
import styles from "../styles/components/header.module.css";

export const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <div  className={styles.headerContent}>
                <div className={styles.headerContentLeft}>
                    <p>Header esquerda</p>
                </div>

                <div className={styles.headerContentRight}>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/">Sobre nós</Link></li>
                        <li><Link href="/">Contato</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};
