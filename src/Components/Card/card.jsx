import styles from './card.module.css';
import fotos from "../Galeria/fotos.json";
import React from 'react'

export default function card({ id }) {

  return (
    <section className={styles.galeria}>
       {fotos.map ((foto)=>{
                return(
                  <div>
      <img className={styles.galeria__imagem} 
                        src={foto.id}
                        alt={foto.titulo}  />
     <p className={styles.galeria__descricao}>{foto.titulo}
                        </p>
                        </div>
        )
      })}
    </section>
  
    
  
)}
