import React from 'react'
import styles from "./styles.module.css";
import Image from '../Galeria/fotos.json';
import image1 from "../../../public/assets/imagens/galeria/foto-1.png"
export default function cardsResponsives() {
  return (
    <div className={styles.body}>
    <div className={styles.slide__container}>
        <div className={styles.slide__content}>
            <div className={styles.card__wrapper}>
                <div className={styles.card}>
                    <div className={styles.image__content}>
                        <span className={styles.overlay}>
                            <div className={styles.card__image}>
                                <img src={image1} alt="foto" className={styles.card__img}/>
                            </div>                             
                        </span>
                    </div>
                    <div className={styles.card__content}>
                        <h2 className={styles.name}>
                            Espaço Continuo
                        </h2>
                        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia saepe dicta, reprehenderit exercitationem laborum, voluptas vero nobis, expedita magni tempora alias. Sint, perspiciatis ipsum sapiente porro natus neque iusto harum?</p>
                        <button className={styles.button}>
                            View More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
