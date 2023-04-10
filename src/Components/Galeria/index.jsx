import React from 'react'
import Tags from '../Tags'
import styles from './Galeria.module.scss'
import fotos from './fotos.json'
import open from "./open.png";
import favorito from "./favorito.png"
import Card from '../Card/card';
export default function Galeria() {
  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags/>
        <ul className={styles.galeria__cards}>
            {fotos.map ((foto)=>{
                return(
                    <li key={foto.id} className={styles.galeria__card}>
                        <Card/>
                        <div>
                            <p>{foto.creditos}</p>
                            <span>
                                <img 
                                src={favorito} 
                                alt="icone do coracao de curtir" 
                                />
                                <img src={open} alt="icone de abrir o modal" />
                            </span>
                        </div>
                    </li>
                )
            })}
        </ul>
        <div>
        </div>
    </section>
  )
}
