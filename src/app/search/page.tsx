"use client";
import styles from './page.module.css'
import React, { useEffect } from 'react';
import { useState } from 'react'

import {useRouter, useSearchParams } from "next/navigation"

import experimentData from "../../app/api/data/experimentos.json"

import bnccData from "../../app/api/data/bncc.json"
import topicGeneralData from "../../app/api/data/experimentGeneralData.json"
import topicSpecificData from "../../app/api/data/materias.json"

//Preciso colocar essa logica no home!

export default function Experiment() {
 
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
    router.push('/search');
  }
  
  return (
    <>
     <div>
        <h1>Experiment data</h1>

        <select
          value={selectedValues.topicGeneral}
          onChange={(e) => {
            const newTopicGeneral = e.target.value;
            setSelectedValues({
              ...selectedValues,
              topicGeneral: newTopicGeneral,
            });
            router.push(`/search?topicGeneral=${newTopicGeneral}`);
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
            router.push(`/search?topicGeneral=${selectedValues.topicGeneral}&topicSpecific=${newTopicSpecific}`);
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
            router.push(`/search?topicGeneral=${selectedValues.topicGeneral}&topicSpecific=${selectedValues.topicSpecific}&topicBncc=${newTopicBncc}`);
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

        {filteredData.length > 0 ? (
          <ul>
            {filteredData.map((experiment) => (
              <li key={experiment.id}><h3>{experiment.title}</h3> <p>{experiment.description}</p></li>
              
            ))}
          </ul>
        ) : (
          <h3>Experimentos não encontrados com os filtros 
            {/* {topicGeneral && <div><span>TópicGeneral</span><p>{topicGeneral}</p></div>}

            {topicSpecific && <div><span>TópicSpecific</span><p>{topicSpecific}</p></div>}

            {topicBncc && <div><span>TópicBncc</span><p>{topicBncc}</p></div>} */}


            </h3>
        )}
      </div>
    </>
  
  )
}
