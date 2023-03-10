"use client"
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/components/searchForm.module.css";

import bncc from "../app/api/data/bncc.json"
import materias from "../app/api/data/materias.json"
import { BiSearchAlt } from "react-icons/bi";

export const SearchForm = () => {

    const [experienceList] = useState(bncc)
    const [materiasList] = useState(materias)

    
    return (
        <>
              <form className={styles.search}>

                <div className={styles.formContent}>
                    <div className={styles['search-field']}>
                        <label className={styles['sr-only']} htmlFor="name">Pesquise por titulo, descrição ou tema</label>
                        <i className={styles['ph-caret-down-light']}></i>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Digite para pesquisar"
                        className={styles.input}
                        />
                    </div>
                    <div className={styles['search-field']}>
                        <label className={styles['sr-only']} htmlFor="city">Pesquise por um tema geral</label>
                        <i className={styles['ph-caret-down-light']}></i>
                        <select className={styles.select} name="city" id="city">
                        <option value="0" selected disabled>Selecione uma opção<></></option>
                        {materiasList !== undefined && 
                            materiasList.map((materiasLists: any) => (
                            <option value={materiasLists.id} key={materiasLists.id}>{materiasLists.title}</option>
                            ))
                        }
                        </select>
                        <i className="ph-caret-down-light"></i>
                    </div>
                </div>

                <div className={styles.formContent}>
                    <div className={styles['search-field']}>
                        <label className={styles['sr-only']} htmlFor="city">Pesquise por um tema geral</label>
                        <i className={styles['ph-caret-down-light']}></i>
                        <select className={styles.select} name="city" id="city">
                        <option value="0" selected disabled>Selecione uma opção<></></option>
                        {materiasList !== undefined && 
                            materiasList.map((materiasLists: any) => (
                            <option value={materiasLists.id} key={materiasLists.id}>{materiasLists.title}</option>
                            ))
                        }
                        </select>
                        <i className="ph-caret-down-light"></i>
                    </div>
                    <div className={styles['search-field']}>
                        <label className={styles['sr-only']} htmlFor="city">Pesquise por um tema especifico</label>
                        <i className={styles['ph-caret-down-light']}></i>
                        <select className={styles.select} name="city" id="city">
                        <option value="0" selected disabled>Selecione uma opção</option>
                        <option value="sao-paulo">Células</option>
                        <option value="rio-de-janeiro">Fenõmenos elétricos</option>
                        <option value="salvador">Ecologia</option>
                        </select>
                        <i className="ph-caret-down-light"></i>
                    </div>
                </div>

                <div className={styles.formContent}>

                    <div className={styles['search-field']}>
                        <label className={styles['sr-only']} htmlFor="city">Pesquise por unidades temáticas e objetos de conhecimentos da BNCC</label>
                        <i className={styles['ph-caret-down-light']}></i>
                        <select className={styles.select} name="city" id="city">
                        <option value="0" selected disabled>Selecione uma opção</option>

                        {experienceList !== undefined && 
                            experienceList.map((experienceLists: any) => (
                            <option value={experienceLists.id} key={experienceLists.id}>{experienceLists.title}</option>
                            ))
                        }
                        
                        </select>
                        <i className="ph-caret-down-light"></i>
                    </div>
                </div>

                <button className={styles['btn-header']}>Buscar agora <BiSearchAlt className={styles.iconSvg}/></button>
                </form>
        </>
       
    );
};
