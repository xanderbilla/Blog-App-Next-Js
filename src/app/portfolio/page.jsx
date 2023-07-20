import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectedTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href='portfolio/illustration' className={styles.item}>
          <span className={styles.title}>Illustration</span>
        </Link>
        <Link href='portfolio/websites' className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href='portfolio/apps' className={styles.item}>
          <span className={styles.title}>Apps</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio