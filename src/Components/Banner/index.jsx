import React from 'react'
import Menu from '../Menu'
import styles from "./paginaInicial.module.scss"
import banner from "./banner.png"
import MapGaleria from '../MapGaleria'
export default function Banner() {
  return (
    <main>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <h1>A GALERIA MAIS COMPLETA DO ESPAÇO</h1>
                        <img src={banner} alt="A imagem da terra vista do espaço" />
                    </div>
                    
                </section>
                <div> 
                      <MapGaleria/>
                    </div>
            </main>
      
  )
}
