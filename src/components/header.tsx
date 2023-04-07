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
        <li><Link href="/">Início</Link></li>
        <li><Link href="/sobre">Sobre</Link></li>
        <li><Link href="/contato">Contato</Link></li>
        <li className={styles.lastListItem}><Link href="/enviar-experimento">Envie seu experimento</Link></li>
      </ul>
    </div>
  </div>
</header>

    );
};
