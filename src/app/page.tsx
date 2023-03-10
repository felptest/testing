"use client";
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'


import experimentData from "../app/api/data/experimentos.json"
import { useState } from 'react'
import { SearchForm } from '@/components/searchForm';


export default function Home() {


  const [experimentInfo] = useState(experimentData)

  const [numToShow, setNumToShow] = useState(6);

  const [recentClicked, setRecentClicked] = useState(true);
  const [latestClicked, setLatestClicked] = useState(false);

  const handleClick = () => {
    setNumToShow(numToShow + 6);
  }

  const sortedExperiments = recentClicked
  ? experimentInfo.slice().reverse()
  : experimentInfo; 

  const handleRecentClick = () => {
    if (!recentClicked) {
      setRecentClicked(true);
      setLatestClicked(false);
      setNumToShow(6);
      // Lógica para exibir experiências recentes
    }
  };
  
  const handleLatestClick = () => {
    if (!latestClicked) {
      setLatestClicked(true);
      setRecentClicked(false);
      setNumToShow(6);
      // Lógica para exibir experiências mais recentes
    }
  };
  

  return (
    <>
      <div className={styles.header}>
    <div className={styles.content}>
      <div className={styles.top}>
        <p>find your experiment</p>
        <h1>Encontre os <span>melhores experimentos</span> de ciências</h1>
      </div>

      <SearchForm />


    </div>
      </div>

      <main className={styles.main}>
      <div className={styles.content}>
        <section className={styles.top}>
          <h2>Experimentos recomendados</h2>
          <div className={styles.view}>

          <button className={recentClicked ? styles["btn-primary-active"] : styles["btn-primary"]} onClick={handleRecentClick}>
            Últimos
          </button>
          <button className={latestClicked ? styles["btn-secondary-active"] : styles["btn-secondary"]} onClick={handleLatestClick}>
            Recentes
          </button>

          </div>
        </section>
        <section className={styles.cards}>
          {sortedExperiments === undefined && (
            <div>
              <h2>Experimentos não encontrados</h2>
            </div>
          )}

          {sortedExperiments !== undefined &&
            sortedExperiments
              .slice(0, numToShow)
              .map((experimentInfos: any) => (
                <div key={experimentInfos.id} className={styles.card}>
                  <Image fill src={experimentInfos.imagePreview} alt="1" />
                  <div className={styles.content}>
                    <h3>{experimentInfos.title}</h3>
                    <p>{experimentInfos.description}</p>
                  </div>
                  <div>
                    <Link
                      className={styles.link}
                      href={"/experiencia/" + experimentInfos.slug}
                    >
                      Ver mais
                    </Link>
                  </div>
                </div>
              ))}
        </section>

        <section className={styles.bottom}>
          {numToShow < sortedExperiments.length && (
            <button onClick={handleClick}>Carregar mais</button>
          )}
        </section>
      </div>
    </main>

    </>
   

  
  )
}
