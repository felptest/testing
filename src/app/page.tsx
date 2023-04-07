"use client";
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'


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
  
  const filteredData = experimentData.filter(
    (experiment) =>
      (!selectedValues.topicGeneral || experiment.topicGeneral === selectedValues.topicGeneral) &&
      (!selectedValues.topicSpecific || experiment.topicSpecific === selectedValues.topicSpecific) &&
      (!selectedValues.topicBncc || experiment.topicBncc === selectedValues.topicBncc)
  );

  const handleResetFilter = () => {
    setSelectedValues({
      topicGeneral: '',
      topicSpecific: '',
      topicBncc: '',
    });
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

    <div>
    <div className={styles.header}>
    <div className={styles.content}>
      <div className={styles.top}>
        <p>find your experiment</p>
        <h1>Encontre os <span>melhores experimentos</span> de ciências</h1>
      </div>

      <div>
        <h2>nessa div vai ficcar uma introdução</h2>
      </div>

    </div>
      </div> 

       <main className={styles.main}>

      <div className={styles.filterContainer}>
        <h1>Experiment data</h1>

        <select
          value={selectedValues.topicGeneral}
          onChange={(e) => {
            const newTopicGeneral = e.target.value;
            setSelectedValues({
              ...selectedValues,
              topicGeneral: newTopicGeneral,
            });
            router.push(`/?topicGeneral=${newTopicGeneral}&topicSpecific=${selectedValues.topicSpecific}&topicBncc=${selectedValues.topicBncc}`);
          }}
        >
          <option value="">Select a general topic</option>
          {experimentGeneralData.map((topic) => (
            <option key={topic.id} value={topic.title}>
              {topic.title}
            </option>
          ))}
        </select>

        <select
          value={selectedValues.topicSpecific}
          onChange={(e) => {
            const newTopicSpecific = e.target.value;
            setSelectedValues({
              ...selectedValues,
              topicSpecific: newTopicSpecific,
            });
            router.push(`/?topicGeneral=${selectedValues.topicGeneral}&topicSpecific=${newTopicSpecific}&topicBncc=${selectedValues.topicBncc}`);
          }}
        >
          <option value="">Select a specific topic</option>
          {experimentSpecificData.map((topic) => (
            <option key={topic.id} value={topic.title}>
              {topic.title}
            </option>
          ))}
        </select>

         <select
          value={selectedValues.topicBncc}
          onChange={(e) => {
            const newTopicBncc = e.target.value;
            setSelectedValues({
              ...selectedValues,
              topicBncc: newTopicBncc,
            });
            router.push(`/?topicGeneral=${selectedValues.topicGeneral}&topicSpecific=${selectedValues.topicSpecific}&topicBncc=${newTopicBncc}`);
          }}
        >
          <option value="">Select a BNCC topic</option>
          {experimentBnccData.map((topic) => (
            <option key={topic.id} value={topic.title}>
              {topic.title}
            </option>
          ))}
        </select>
 
        <button onClick={handleResetFilter}>Reset Filter</button>       

      </div>



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
    </div>


    </>
   

  
  )
}
