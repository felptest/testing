import styles from './page.module.css'
import Image from 'next/image'
import image01 from '../assets/01.jpeg'
import image02 from '../assets/02.jpeg'
import image03 from '../assets/03.jpeg'
import Link from 'next/link'

import { BiSearchAlt } from "react-icons/bi";



export default function Home() {
  return (
    <>
      <header className={styles.header}>
    <div className={styles.content}>
      <div className={styles.top}>
        <p>find your experiment</p>
        <h1>Encontre os <span>melhores experimentos</span> de ciências</h1>
      </div>

      <form className={styles.search}>

        <div>
          <div className={styles['search-field']}>
            <label className={styles['sr-only']} htmlFor="name">Pesquise por nome</label>
            <i className={styles['ph-caret-down-light']}></i>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Pesquise por nome"
              className={styles.input}
            />
          </div>
          <div className={styles['search-field']}>
            <label className={styles['sr-only']} htmlFor="city">Pesquise por eixo da BNCC</label>
            <i className={styles['ph-caret-down-light']}></i>
            <select className={styles.select} name="city" id="city">
              <option value="0" selected disabled>Pesquise por eixo da BNCC</option>
              <option value="sao-paulo">Células</option>
              <option value="rio-de-janeiro">Fenõmenos elétricos</option>
              <option value="salvador">Ecologia</option>
            </select>
            <i className="ph-caret-down-light"></i>
          </div>
        </div>

        <div>
        <div className={styles['search-field']}>
            <label className={styles['sr-only']} htmlFor="city">Pesquise por um tema geral</label>
            <i className={styles['ph-caret-down-light']}></i>
            <select className={styles.select} name="city" id="city">
              <option value="0" selected disabled>Pesquise por um tema geral</option>
              <option value="sao-paulo">Células</option>
              <option value="rio-de-janeiro">Fenõmenos elétricos</option>
              <option value="salvador">Ecologia</option>
            </select>
            <i className="ph-caret-down-light"></i>
          </div>
          <div className={styles['search-field']}>
            <label className={styles['sr-only']} htmlFor="city">Pesquise por um tema especifico</label>
            <i className={styles['ph-caret-down-light']}></i>
            <select className={styles.select} name="city" id="city">
              <option value="0" selected disabled>Pesquise por um tema especifico</option>
              <option value="sao-paulo">Células</option>
              <option value="rio-de-janeiro">Fenõmenos elétricos</option>
              <option value="salvador">Ecologia</option>
            </select>
            <i className="ph-caret-down-light"></i>
          </div>
        </div>
       
        <button className={styles['btn-header']}>Buscar agora <BiSearchAlt className={styles.iconSvg}/></button>
      </form>
    </div>
      </header>

      <main className={styles.main}>  
      <div className={styles.content}>
        <section className={styles.top}>
          <h2>Experimentos recomendados</h2>
          <div className={styles.view}>
            <button className={styles['btn-primary']}>Lista</button>
            <button className={styles['btn-secondary']}>Mapa</button>
          </div>
        </section>
        <section className={styles.cards}>
          <div className={styles.card}>
            <Image src={image01} alt="1" />
            <div className={styles.content}>
              <h3>O Python do vovô não sobe mais</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>

            </div>

            <div>
              <Link className={styles.link} href="/">Ver mais</Link>
            </div>
          </div>

          <div className={styles.card}>
          <Image src={image02} alt="2" />
            <div className={styles.content}>
              <h3>Todo mundo null</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>

            </div>

              <div>
                <Link className={styles.link} href="/">Ver mais</Link>
              </div>
            </div>

          <div className={styles.card}>
          <Image src={image03} alt="3" />

            <div className={styles.content}>
              <h3>Hoje dou exception</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>

            </div>

            <div>
                <Link className={styles.link} href="/">Ver mais</Link>
            </div>
              
          </div>

          <div className={styles.card}>
            <Image src={image01} alt="1" />


            <div className={styles.content}>
              <h3>O Python do vovô não sobe mais</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>

            </div>

            <div>
                <Link className={styles.link} href="/">Ver mais</Link>
            </div>
          </div>

          <div className={styles.card}>
            <Image src={image02} alt="2" />

            <div className={styles.content}>
              <h3>Todo mundo null</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>

            </div>

            <div>
                <Link className={styles.link} href="/">Ver mais</Link>
            </div>
          </div>

          <div className={styles.card}>
            <Image src={image03} alt="3" />

            <div className={styles.content}>
              <h3>Hoje dou exception</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>

            </div>

            <div>
                <Link className={styles.link} href="/">Ver mais</Link>
            </div>
          </div>
          
        </section>
        <section className={styles.bottom}>
          <h3>Carregar mais</h3>
        </section>
      </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerBlock}>
            <ul>
              <li>Titulo 1 1</li>
              <li>Saiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projeto</li>
            </ul>
          </div>

          <div className={styles.footerBlock}>
            <ul>
              <li>Titulo 2</li>
              <li>Saiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projeto</li>
            </ul>
          </div>

          <div className={styles.footerBlock}>
            <ul>
              <li>Titulo 3</li>
              <li>Saiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projetoSaiba sobre o projeto</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
   

  
  )
}
