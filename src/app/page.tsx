"use client";
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

import imageHome from "../../public/images/img-fogo2.jpg"
import experimentData from "../app/api/data/experimentos.json"
import { useState } from 'react'

import {useRouter, useSearchParams } from "next/navigation"


import bnccData from "../app/api/data/bncc.json"
import topicGeneralData from "../app/api/data/experimentGeneralData.json"
import topicSpecificData from "../app/api/data/materias.json"

//PRECISO ver o visual de experiment data, e talvez adicionar um search de escrever!
export default function Home() {

  const [experimentBnccData] = useState(bnccData)
  const [experimentGeneralData] = useState(topicGeneralData)
  const [experimentSpecificData] = useState(topicSpecificData)

  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedValues, setSelectedValues] = useState({
    topicGeneral: searchParams.get('topicGeneral') || '',
    topicSpecific: searchParams.get('topicSpecific') || '',
    topicBncc: searchParams.get('topicBncc') || '',
  });
  
  const [filteredData, setFilteredData] = useState(experimentData);

  const handleFilterData = () => {
    const filteredData = experimentData.filter(
      (experiment) =>
        (!selectedValues.topicGeneral || experiment.topicGeneral.toLowerCase() === selectedValues.topicGeneral.toLowerCase()) &&
        (!selectedValues.topicSpecific || experiment.topicSpecific.toLowerCase() === selectedValues.topicSpecific.toLowerCase()) &&
        (!selectedValues.topicBncc || experiment.topicBncc.toLowerCase() === selectedValues.topicBncc.toLowerCase())
    );
    setFilteredData(filteredData);
    setNumToShow(6);
    router.push(`/?topicGeneral=${selectedValues.topicGeneral}&topicSpecific=${selectedValues.topicSpecific}&topicBncc=${selectedValues.topicBncc}`);

  }
  

  const handleResetFilter = () => {
    setSelectedValues({
      topicGeneral: '',
      topicSpecific: '',
      topicBncc: '',
    });
    setFilteredData(experimentData);
    setNumToShow(6);
    router.push('/');
  }


  const [numToShow, setNumToShow] = useState(6);

  const [recentClicked, setRecentClicked] = useState(true);
  const [latestClicked, setLatestClicked] = useState(false);

  const handleClick = () => {
    setNumToShow(numToShow + 6);
  }

  const sortedExperiments = recentClicked
  ? filteredData.slice().reverse()
  : filteredData; 

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

    <section className={styles.home}>
                    <div className={`${styles.home__container} ${styles.container}`}>
                        <div className={styles.home__data}>
                            {/* <span className={styles.home__subtitle}>Error 404</span> */}
                            <h1 className={styles.home__title}>O maior repositório de experimentos do mundo!</h1>

                            <p className={styles.home__description}>
                               
Desbrave todos os tipos de experimentos, separados por tema, eixo da bncc ou local apropriado, fácil de usar, revisadas por professores e repleto de novos experimentos toda semana!
                            </p>

                            <a href="/application" className={styles.home__button}>
                                Clique aqui e começe a pesquisar
                            </a>
                        </div>

                        <div className={styles.home__img}>
                          <img width={400} src="https://png.pngtree.com/png-clipart/20210205/ourlarge/pngtree-chemistry-teacher-doing-experiment-png-image_2872088.jpg" alt="" />
                            <div className={styles.home__shadow}></div>
                        </div>
                    </div>


                </section>

       <main className={styles.main}>

 



       <div className={styles.content}>
        <section className={styles.top}>
          <h2>Experimentos recomendados</h2>
          <div className={styles.view}>

          <button className={recentClicked ? styles["btn-primary-active"] : styles["btn-primary"]} onClick={handleRecentClick}>
            Mais recentes
          </button>
          <button className={latestClicked ? styles["btn-secondary-active"] : styles["btn-secondary"]} onClick={handleLatestClick}>
            Mais antigos
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
