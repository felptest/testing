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
             <div className={styles.parallax}></div>
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
           
             <h3>Literatura</h3>
             <p>{experimentInfo.literature}</p>
 
             <h3>Objetivos</h3>
             <p>{experimentInfo.objectives}</p>
 
             <h3>Materiais utilizados</h3>
             <ul>
              {experimentInfo.materials[0] && <li>{experimentInfo.materials[0]}</li>}
              {experimentInfo.materials[1] && <li>{experimentInfo.materials[1]}</li>}
              {experimentInfo.materials[2] && <li>{experimentInfo.materials[2]}</li>}

             </ul>
 
             <h3>Instruções</h3>
             <ol>
              <li>{experimentInfo.methods}</li>
               <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt esse voluptates perferendis aliquid, ullam quo labore aut ut voluptatibus distinctio est ea magni eos dolore itaque reiciendis culpa, alias praesentium.</li>
               <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laboriosam similique ducimus quidem velit incidunt quas cumque facere alias, optio unde ipsa dicta possimus commodi minima aperiam iure nisi natus.</li>
               <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur sequi iste explicabo vero quisquam ad! Magni tenetur odit, illum fuga et totam neque vel, voluptas voluptates cupiditate porro quidem blanditiis!</li>
               <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolorum vitae maxime esse architecto assumenda sit nam facere laborum commodi sequi placeat perspiciatis corrupti, magnam doloremque eius ex, beatae sunt.</li>
             </ol>
 
             <h3>Resultado esperado</h3>
             <p>{experimentInfo.results}</p>
 
 
             <h3>Explicação científica</h3>
             <p>{experimentInfo.scientificExplanation}</p>
 
             <h3>Referências</h3>
             <ul>
              <li>{experimentInfo.references}</li>
               <li><a href="/">link de site numero 1</a></li>
               <li><a href="/">link de site numero 2</a></li>
               <li><a href="/">link de site numero 3</a></li>
               <li><a href="/">link de site numero 4</a></li>
               <li><a href="/">link de site numero 5</a></li>
             </ul>
           
           </div>
 
         </div>
        }
       
      </main>
    </>
  
  )
}
