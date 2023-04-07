"use client";
import styles from './page.module.css'
import image from '../../assets/01.jpeg'
import Link from 'next/link';

export default function About() {  
 



  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sobre nós</h1>
      <div className={styles.content}>
        <div className={styles.description}>
          <h2>Quem somos</h2>
          <p>Somos uma equipe apaixonada por tecnologia e inovação. Desde a nossa fundação, em 2010, temos como objetivo criar soluções criativas e eficientes para ajudar nossos clientes a alcançarem seus objetivos.</p>
          <p>Nossa equipe é composta por profissionais altamente qualificados e experientes, que estão sempre em busca de novos desafios e aprendizados. Estamos sempre atualizados sobre as últimas tendências e tecnologias do mercado para oferecer as melhores soluções aos nossos clientes.</p>
        </div>
        <div className={styles.image}>
          <img src="https://www.poderdaescuta.com/wp-content/uploads/2018/07/210765-produtividade-de-sua-equipe-6-maneiras-de-melhorar.jpg" />
        </div>
      </div>
      <div className={styles.cta}>
        <h2>Entre em contato</h2>
        <p>Estamos prontos para ajudar você e sua empresa a alcançarem seus objetivos. Entre em contato conosco para saber mais sobre nossos serviços e soluções.</p>
        <button className={styles.button}><Link href="/contato">Entre em contato</Link></button>
      </div>
    </div>
  );
}
