import styles from "../styles/components/footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerBlock}>
            <ul>
              <li>Sobre</li>
              <li>Projetado e desenvolvido por Fellippe Matheus</li>
              <li>
Copyright 2023 - Direitos reservados</li>
            </ul>
          </div>

          <div className={styles.footerBlock}>
            <ul>
              <li>Contato</li>
              <li>mande um email para email@gmail.com</li>
            </ul>
          </div>

          <div className={styles.footerBlock}>
            <ul>
              <li>Projeto</li>
              <li>O projeto pretende juntar todos os experimentos possiveis de ciências encontrados em livros, revistas, pdfs e sites, com os devidos créditos, para facilitar o compartilhamento entre professores e alunos e fazer com que seja mais facil encontrar uma gama de experimentos para realizar nas escolas pelo Brasil.</li>
            </ul>
          </div>
        </div>
      </footer>
    );
};
