"use client";
 import styles from './page.module.css'
 import { BsFilePdf } from "react-icons/bs";
import experimentData from "../../api/data/experimentos.json"
import { useState } from 'react';


export default function Experiment({ params }: {
  params: { slug: string };
}) {
  const [experimentList] = useState(experimentData)
  const pageSlug = params.slug

  const experimentInfo = experimentList.find(element => element.slug === pageSlug);
  
  console.log(experimentInfo?.materials.length)

  return (


    <>
      <main  className={styles.mainWrapper} >  
        {experimentInfo === undefined && 
        <div><h2>Experimento não encontrado</h2></div>
        }

        {experimentInfo !== undefined && 
         <div className={styles.mainContent}>

         <div className={styles.conteudoTuto}>
             <div style={{backgroundImage: "url" + "(" + experimentInfo.imagePreview + ")" }} className={styles.parallax}></div>
         </div>
          
           <div className={styles.mainHeader}>
             <div className={styles.mainHeaderContentLeft}>
               <div className={styles.mainHeaderProfileImageContainer}>
                 <img src={experimentInfo.profileImage} alt="" />
               </div>
               <span className={styles.mainHeaderProfileNameContainer}><p>{experimentInfo.profileName}</p></span>
               <p>Postado em: </p>
               <span><p>{experimentInfo.postDate}</p></span>
         
             </div>
             
             <div className={styles.mainHeaderContentRight}>
               <p>Download em PDF</p>
               
               <BsFilePdf />
               
             </div>
           </div>
 
           <div className={styles.ContentPost}>
 
             <h2>{experimentInfo.title}</h2>
             <p>{experimentInfo.description}</p>

             <h3>Assuntos abordados</h3>
             <p><span>Tópico geral:</span>{experimentInfo.topicGeneral}</p>
             <p><span>Tópico específico:</span>{experimentInfo.topicSpecific}</p>
             <p><span>Unidade temática e objeto de conhecimento da BNCC:</span>{experimentInfo.topicBncc}</p>
           
             <h3>Literatura</h3>
             <p>{experimentInfo.literature}</p>
 
             <h3>Objetivos</h3>
             <p>{experimentInfo.objectives}</p>
 
             <h3>Materiais utilizados</h3>
             <ul>
              {experimentInfo.materials.map((material, index) => (
                material && <li key={index}>{material}</li>
              ))}
            </ul>

             <h3>Instruções</h3>

             <ol>
              {experimentInfo.methods.map((method, index) => (
                method && <li key={index}>{method}</li>
              ))}
            </ol>

             <h3>Resultado esperado</h3>
             <p>{experimentInfo.results}</p>
 
 
             <h3>Explicação científica</h3>
             <p>{experimentInfo.scientificExplanation}</p>
 
             <h3>Referências</h3>

             <ul className={styles.blockListReference}>
              {experimentInfo.references.map((reference, index) => (
                reference && <li className={styles.listReference} key={index}>{reference}</li>
              ))}
            </ul>

           </div>
 
         </div>
        }
       
      </main>
    </>
  
  )
}
