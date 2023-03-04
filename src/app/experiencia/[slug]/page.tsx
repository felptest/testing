"use client";
 import styles from './page.module.css'
 


export default function Experiment() {

  return (
    <>
      <header /* className={styles.header} */>
          <div>header</div>
      </header>

      <main  className={styles.main} >  
        <div className={styles.mainContent}>
          <div className={styles.mainHeader}>
            <div className={styles.mainHeaderProfileImageContainer}>
              <img src="https://4maos.com.br/wp-content/uploads/2022/07/f2582064395492d2a0f0d0f2baded609.jpg" alt="" />
            </div>
              <span className={styles.mainHeaderProfileNameContainer}><p>Felippe Matheus</p></span>
        
              <p>04 de março de 2023</p>
          </div>

          <div className={styles.ContentPost}>
            <h2>Meu grande titulo</h2>
          </div>

        </div>
      </main>

      <footer /* className={styles.footer} */>
        <div>footer</div>
      </footer>
    </>
  
  )
}
