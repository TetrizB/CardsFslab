import React from 'react'
import styles from '../Eventos/eventos.module.css'
import image from '../Eventos/Images/image 1.png'
export default function eventos() {
  return (
    <div>
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <img src={image}/>
                    <div className={styles.card_texto}>
                    <h1>2022<br />IV ENPP</h1>
                    <h2>Porto Velho - RO</h2>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
