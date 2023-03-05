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
                <img src="https://4maos.com.br/wp-content/uploads/2022/07/f2582064395492d2a0f0d0f2baded609.jpg" alt="" />
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

            <h3>Explicação ciêntifica da experiência</h3>
            <p>A explicação é issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjssé issso e issos jfjfhfgdjss</p>
          
          
          </div>

        </div>
      </main>
    </>
  
  )
}
