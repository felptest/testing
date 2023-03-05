"use client";
import { Header } from '@/components/header';
 import styles from './page.module.css'
 
 import { BsFilePdf } from "react-icons/bs";


export default function Experiment() {

  return (
    <>
      <main  className={styles.mainWrapper} >  
        <div className={styles.mainContent}>

        <div className={styles.conteudoTuto}>
            <div className={styles.parallax}></div>
        </div>
         
          <div className={styles.mainHeader}>
            <div className={styles.mainHeaderContentLeft}>
              <div className={styles.mainHeaderProfileImageContainer}>
                <img src="https://hips.hearstapps.com/hmg-prod/images/street-portrait-of-a-young-man-using-mobile-phone-royalty-free-image-1018047498-1564431457.jpg?crop=0.668xw:1.00xh;0.226xw,0&resize=1200:*" alt="" />
              </div>
              <span className={styles.mainHeaderProfileNameContainer}><p>Felippe Matheus</p></span>
              <p>Postado em: </p>
              <span><p>04 de março de 2023</p></span>
        
            </div>
            
            <div className={styles.mainHeaderContentRight}>
              <p>Download em PDF</p>
              
              <BsFilePdf />
              
            </div>
          </div>

          <div className={styles.ContentPost}>

            <h2>Meu grande titulo</h2>
            <p>essa e a descriçãoessa e a descriçãoessa e a descriçãoessa e a descriçãoessa e a descriçãoessa e a descriçãoessa e a descriçãoessa e a descriçãoessa e a descriçãoessa e a descrição</p>
          
            <h3>Revisão de literatura</h3>
            <p>Essa experiência é do tema isso e isso e fala queEssa experiência é do tema isso e isso e fala queEssa experiência é do tema isso e isso e fala queEssa experiência é do tema isso e isso e fala que </p>

            <h3>Materiais utilizados</h3>
            <ul>
              <li>material 1</li>
              <li>material 2</li>
              <li>material 3</li>
              <li>material 4</li>
              <li>material 5</li>

            </ul>

            <h3>Instruções</h3>
            <ol>
              <li>Nós devemos fazerNós devemos fazerNós devemos fazerNós devemos fazer</li>
              <li>Nós devemos fazerNós devemos fazerNós devemos fazerNós devemos fazerevemos fazerNós devemos fazerNós devemos fazerNós devemos fazerevemos fazerNós devemos fazerNós devemos fazerNós devemos fazerevemos fazerNós devemos fazerNós devemos fazerNós devemos fazer</li>
              <li>Nós devemos fazerNós devemos fazerNós devemos fazerNós devemos fazer</li>
              <li>Nós devevemos fazerNós devemos fazerNós devemos fazerNós devemos fazerevemos fazerNós devemos fazerNós devemos fazerNós devemos fazerevemos fazerNós devemos fazerNós devemos fazerNós devemos fazeremos fazerNós devemos fazerNós devemos fazerNós devemos fazer</li>
            </ol>

            <h3>O que deve acontecer?</h3>
            <p>Conforme for fazendo deve ocorrer deConforme for fazendo deve ocorrer deConforme for fazendo deve ocorrer deConforme for fazendo deve ocorrer deConforme for fazendo deve ocorrer deConforme for fazendo deve ocorrer deConforme for fazendo deve ocorrer deConforme for fazendo deve ocorrer deConforme for fazendo deve ocorrer de</p>

            <h3>Explicação ciêntifica</h3>
            <p>A explicação é issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjss</p>

            <h3>Conclusões</h3>
            <p>Concluimos queConcluimos queConcluimos queConcluimos queConcluimos queConcluimos queConcluimos queConcluimos queConcluimos queConcluimos queConcluimos que </p>

            <h3>Referências bibliográficas</h3>
            <ul>
              <li>link de site numero 1</li>
              <li>link de site numero 2</li>
              <li>link de site numero 3</li>
              <li>link de site numero 4</li>
              <li>link de site numero 5</li>
            </ul>
          
          </div>

        </div>
      </main>
    </>
  
  )
}
