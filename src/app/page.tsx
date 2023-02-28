import styles from './page.module.css'
import Image from 'next/image'
import image01 from '../assets/01.jpeg'
import image02 from '../assets/02.jpeg'
import image03 from '../assets/03.jpeg'
import Link from 'next/link'



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
            <label className={styles['sr-only']} htmlFor="city">Pesquise por tema da BNCC</label>
            <i className={styles['ph-caret-down-light']}></i>
            <select className={styles.select} name="city" id="city">
              <option value="0" selected>Pesquise por tema da BNCC</option>
              <option value="sao-paulo">Células</option>
              <option value="rio-de-janeiro">Fenõmenos elétricos</option>
              <option value="salvador">Ecologia</option>
            </select>
            <i className="ph-caret-down-light"></i>
          </div>
        </div>

        <div>
        <div className={styles['search-field']}>
            <label className={styles['sr-only']} htmlFor="city">Pesquise por um tema especifico</label>
            <i className={styles['ph-caret-down-light']}></i>
            <select className={styles.select} name="city" id="city">
              <option value="0" selected>Pesquise por um tema especifico</option>
              <option value="sao-paulo">Células</option>
              <option value="rio-de-janeiro">Fenõmenos elétricos</option>
              <option value="salvador">Ecologia</option>
            </select>
            <i className="ph-caret-down-light"></i>
          </div>
          <div className={styles['search-field']}>
            <label className={styles['sr-only']} htmlFor="city">Pesquise por um tipo</label>
            <i className={styles['ph-caret-down-light']}></i>
            <select className={styles.select} name="city" id="city">
              <option value="0" selected>Pesquise por um tipo</option>
              <option value="sao-paulo">Células</option>
              <option value="rio-de-janeiro">Fenõmenos elétricos</option>
              <option value="salvador">Ecologia</option>
            </select>
            <i className="ph-caret-down-light"></i>
          </div>
        </div>
       
        <button className={styles['btn-header']}>Buscar agora</button>
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

              <div className={styles.location}>
                <i className={styles['ph-caret-down-light']}></i>
                São Paulo - SP
              </div>

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

              <div className={styles.location}>
                <i className={styles['ph-caret-down-light']}></i>
                Salvador - BA
              </div>
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

              <div className={styles.location}>
                <i className={styles['ph-caret-down-light']}></i>
                Rio de Janeiro - RJ
              </div>

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

              <div className={styles.location}>
                <i className={styles['ph-caret-down-light']}></i>
                São Paulo - SP
              </div>

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

              <div className={styles.location}>
                <i className={styles['ph-caret-down-light']}></i>
                Salvador - BA
              </div>

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

              <div className={styles.location}>
                <i className={styles['ph-caret-down-light']}></i>
                Rio de Janeiro - RJ
              </div>

            </div>

            <div>
                <Link className={styles.link} href="/">Ver mais</Link>
            </div>
          </div>
          
        </section>
      </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerBlock}>
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
              <li>item 4</li>
            </ul>
          </div>

          <div className={styles.footerBlock}>
            <ul>
              <li>Contato</li>
              <li>Saiba sobre o projeto</li>
              <li>Mande um feedback</li>
              <li>item 4</li>
            </ul>
          </div>

          <div className={styles.footerBlock}>
            <ul>
              <li>Sobre a plataforma</li>
              <li>Saiba sobre o projeto</li>
              <li>Mande um feedback</li>
              <li>item 4</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
   

  
  )
}
