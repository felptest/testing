"use client";
import styles from './page.module.css'

import Link from 'next/link'

import imageHome from "../../public/images/img-fogo2.jpg"
import experimentData from "../../app/api/data/experimentos.json"
import { useState } from 'react'

import {useRouter, useSearchParams } from "next/navigation"


import bnccData from "../../app/api/data/bncc.json"
import topicGeneralData from "../../app/api/data/experimentGeneralData.json"
import topicSpecificData from "../../app/api/data/materias.json"
import Image from 'next/image';
export default function About() {  
  const [experimentBnccData] = useState(bnccData);
  const [experimentGeneralData] = useState(topicGeneralData);
  const [experimentSpecificData] = useState(topicSpecificData);

  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedValues, setSelectedValues] = useState({
    topicGeneral: searchParams.get('topicGeneral') || '',
    topicSpecific: searchParams.get('topicSpecific') || '',
    topicBncc: searchParams.get('topicBncc') || '',
  });

  const [filteredData, setFilteredData] = useState(experimentData);

  const handleFilterData = () => {
    const filteredData = experimentData.filter((experiment) =>
      (!selectedValues.topicGeneral ||
        experiment.topicGeneral.toLowerCase() === selectedValues.topicGeneral.toLowerCase()) &&
      (!selectedValues.topicSpecific ||
        experiment.topicSpecific.toLowerCase() === selectedValues.topicSpecific.toLowerCase()) &&
      (!selectedValues.topicBncc || experiment.topicBncc.toLowerCase() === selectedValues.topicBncc.toLowerCase())
    );
    setFilteredData(filteredData);
    setNumToShow(6);
    router.push(
      `/experience/?topicGeneral=${selectedValues.topicGeneral}&topicSpecific=${selectedValues.topicSpecific}&topicBncc=${selectedValues.topicBncc}`
    );
  };

  const [numToShow, setNumToShow] = useState(6);

  const handleClick = () => {
    setNumToShow(numToShow + 6);
  };



  return (

    <div className={styles.container}>

<div className={styles.filters}>
  <div className={styles.filter}>
    <label htmlFor="topicGeneral">Tópico Geral:</label>
    <select
      id="topicGeneral"
      value={selectedValues.topicGeneral}
      onChange={(e) => setSelectedValues({ ...selectedValues, topicGeneral: e.target.value })}
      className={styles.select}
    >
      <option value="">Todos</option>
      {experimentGeneralData.map((topic) => (
        <option key={topic.id} value={topic.slug}>
          {topic.title}
        </option>
      ))}
    </select>
  </div>

  <div className={styles.filter}>
    <label htmlFor="topicSpecific">Tópico Específico:</label>
    <select
      id="topicSpecific"
      value={selectedValues.topicSpecific}
      onChange={(e) => setSelectedValues({ ...selectedValues, topicSpecific: e.target.value })}
      className={styles.select}
    >
      <option value="">Todos</option>
      {experimentSpecificData.map((topic) => (
        <option key={topic.id} value={topic.slug}>
          {topic.title}
        </option>
      ))}
    </select>
  </div>

  <div className={styles.filter}>
    <label htmlFor="topicBncc">Tópico BNCC:</label>
    <select
      id="topicBncc"
      value={selectedValues.topicBncc}
      onChange={(e) => setSelectedValues({ ...selectedValues, topicBncc: e.target.value })}
      className={styles.select}
    >
      <option value="">Todos</option>
      {experimentBnccData.map((topic) => (
        <option key={topic.id} value={topic.slug}>
          {topic.title}
        </option>
      ))}
    </select>
  </div>

  <button onClick={handleFilterData} className={styles.searchButton}>
    Pesquisar <span className={styles.searchIcon}>🔍</span>
  </button>
</div>

    

      <button onClick={handleFilterData}>Pesquisar</button>

      <div className={styles.content}>
        <section className={styles.top}>
          <h2>Experimentos recomendados</h2>
        </section>

        <section className={styles.cards}>
          {filteredData === undefined && (
            <div>
              <h2>Experimentos não encontrados</h2>
            </div>
          )}

          {filteredData !== undefined &&
            filteredData.slice(0, numToShow).map((experimentInfos) => (
              <div key={experimentInfos.id} className={styles.card}>
                <Image fill src={experimentInfos.imagePreview} alt="1" />
                <div className={styles.content}>
                  <h3>{experimentInfos.title}</h3>
                  <p>{experimentInfos.description}</p>
                </div>
                <div>
                  <Link className={styles.link} href={`/experience/${experimentInfos.slug}`}>
                    Ver mais
                  </Link>
                </div>
              </div>
            ))}
        </section>

        <section className={styles.bottom}>
          {numToShow < filteredData.length && (
            <button onClick={handleClick}>Carregar mais</button>
          )}
        </section>
      </div>
    </div>
  
  );
}
