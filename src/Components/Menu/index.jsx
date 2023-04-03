import React from 'react'
import home from "../../icones/home-ativo.png"
import maisCurtidas from "../../icones/mais-curtidas-inativo.png"
import maisVistas from "../../icones/mais-vistas-inativo.png"
import novas from "../../icones/novas-inativo.png"
import SurprendaMe from "../../icones/surpreenda-me-inativo.png"
import styles from "./menu.module.scss"
export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li className={styles.menu__item}>
                <img src={home} alt="Inicio" />
                <a href="">Inicio</a>
            </li >
            <li className={styles.menu__item} >
                <img src={maisCurtidas} alt="Mais curtidas" />
                <a href="">Mais Curtidas</a>
            </li >
            <li className={styles.menu__item} >
                <img src={maisVistas} alt="Mais Vistas" />
                <a href=""> Mais Vistas</a>
            </li >
            <li className={styles.menu__item} >
                <img src={novas} alt="Novas" />
                <a href="">Novas</a>
            </li >
            <li className={styles.menu__item} >
                <img src={SurprendaMe} alt="Surpreenda-Me" />
                <a href="">Surpreenda-Me</a>
            </li>
        </ul>
    </nav>
  )
}
