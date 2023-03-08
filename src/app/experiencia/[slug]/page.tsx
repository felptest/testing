"use client";
import { Header } from '@/components/header';
 import styles from './page.module.css'
 import { BsFilePdf } from "react-icons/bs";
 import type { Metadata } from 'next'



export default function Experiment({ params }: {
  params: { slug: string };
}) {

  const searchExperience = params.slug
  //Falta pegar slug e achar o article e criar um map
  console.log(searchExperience)

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
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore optio laudantium sint dolore perspiciatis incidunt non, ipsum ex, molestiae voluptate iusto fugiat repellat necessitatibus nisi! Repellat iste aliquid dolorum illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum sapiente fugit quod magnam possimus hic asperiores distinctio, dolor sit iusto illum earum quaerat. Voluptas beatae dolores praesentium quas aut.</p>
          
            <h3>Literatura</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic sit fuga animi numquam nostrum illo ut, natus quia totam omnis veritatis magnam esse aliquam deleniti tenetur earum, impedit explicabo quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ut dolorum! Est illum explicabo excepturi? Animi rerum similique aperiam eveniet. Saepe doloremque id temporibus porro voluptas dolore. Eligendi, dolores error! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et eum omnis nobis dicta veniam unde, libero nisi explicabo aliquid! Unde quos optio dolor nulla velit ipsa quibusdam enim amet voluptatem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam odit voluptatum magnam illum cum accusantium assumenda, quibusdam architecto. Aspernatur quod odio nulla, optio officiis saepe cum quos magnam numquam magni. </p>

            <h3>Objetivos</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi velit reiciendis officiis eos laudantium, hic blanditiis harum quam debitis? Veniam odio corrupti praesentium voluptatem totam veritatis sint autem rerum labore.</p>

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
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt esse voluptates perferendis aliquid, ullam quo labore aut ut voluptatibus distinctio est ea magni eos dolore itaque reiciendis culpa, alias praesentium.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laboriosam similique ducimus quidem velit incidunt quas cumque facere alias, optio unde ipsa dicta possimus commodi minima aperiam iure nisi natus.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur sequi iste explicabo vero quisquam ad! Magni tenetur odit, illum fuga et totam neque vel, voluptas voluptates cupiditate porro quidem blanditiis!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolorum vitae maxime esse architecto assumenda sit nam facere laborum commodi sequi placeat perspiciatis corrupti, magnam doloremque eius ex, beatae sunt.</li>
            </ol>

            <h3>Resultado esperado</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta temporibus perspiciatis pariatur rem hic consectetur voluptates, ipsa ratione neque adipisci. Doloribus vel at reprehenderit quia alias eaque voluptate accusamus eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, consequatur tenetur. Error dolore quod voluptas libero ad, ipsum accusantium quas sequi officiis, dolor provident quia harum corrupti magnam saepe distinctio?</p>


            <h3>Explicação científica</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quidem molestias ipsum numquam quo maiores debitis quibusdam! Tempora inventore culpa, quod suscipit neque magnam! Et pariatur perspiciatis eius exercitationem porro. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat possimus numquam aliquid aperiam voluptas earum praesentium quia repudiandae ipsum pariatur, mollitia sit obcaecati nulla est quae, omnis officia iure voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum commodi velit labore eveniet alias repellendus sed. Quis sed possimus magnam debitis aperiam ipsa, reprehenderit nemo ea delectus porro. Ex.</p>

            <h3>Referências</h3>
            <ul>
              <li><a href="/">link de site numero 1</a></li>
              <li><a href="/">link de site numero 2</a></li>
              <li><a href="/">link de site numero 3</a></li>
              <li><a href="/">link de site numero 4</a></li>
              <li><a href="/">link de site numero 5</a></li>
            </ul>
          
          </div>

        </div>
      </main>
    </>
  
  )
}
