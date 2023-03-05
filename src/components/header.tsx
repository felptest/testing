import styles from "../styles/components/header.module.css";

export const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <div  className={styles.headerContent}>
                <div className={styles.headerContentLeft}>
                    <p>Header esquerda</p>
                </div>

                <div className={styles.headerContentRight}>
                    <p>item dirieta</p>
                </div>
            </div>
        </header>
    );
};
