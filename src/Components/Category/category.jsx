import styles from "./category.module.css"
import React from 'react'

export default function category({category, children}) {
  return (
    <section className={styles.category}>
        <h2>{category}</h2>
        <section >
            {children}
        </section>
    </section>
  )
}
