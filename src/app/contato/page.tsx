"use client";
import styles from './page.module.css'


export default function Contact() {  
 



  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Entre em contato conosco</h2>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Nome:</label>
          <input id="name" type="text" className={styles.input} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>E-mail:</label>
          <input id="email" type="email" className={styles.input} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Mensagem:</label>
          <textarea id="message" className={styles.textarea} required></textarea>
        </div>
        <button type="submit" className={styles.button}>Enviar</button>
      </form>
    </div>
  );
}
