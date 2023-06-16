"use client";
import styles from './page.module.css'
import mainImage from "../../public/images/imageMain1.png"
import Image from 'next/image';

//PRECISO ver o visual de experiment data, e talvez adicionar um search de escrever!
export default function Home() {

  

  return (
    <>

    <section className={styles.home}>
                    <div className={`${styles.home__container} ${styles.container}`}>
                        <div className={styles.home__data}>
                            {/* <span className={styles.home__subtitle}>Error 404</span> */}
                            <h1 className={styles.home__title}>O maior repositório de experimentos do mundo!</h1>

                            <p className={styles.home__description}>
                            Explore diversos tipos de experimentos, organizados por tema, eixo da BNCC ou local apropriado. A plataforma é fácil de usar, com revisões feitas por professores e repleto de novos experimentos todas as semanas!
                            </p>

                            <a href="/experience" className={styles.home__button}>
                                Clique aqui e começe a pesquisar
                            </a>
                        </div>

                        <div className={styles.home__img}>
                          <Image src={mainImage} alt='' width={400} />
                            <div className={styles.home__shadow}></div>
                        </div>
                    </div>


                </section>

       <main className={styles.main}>

 



       
    </main> 


    </>
   

  
  )
}
