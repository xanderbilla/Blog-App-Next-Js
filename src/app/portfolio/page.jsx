import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Portfolio | Xander Billa',
  description: 'This is the portfolio page of the author.',
}

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectedTitle}>Choose Category</h1>
      <div className={styles.items}>
        <Link href='portfolio/illustration' className={styles.item}>
          <span className={styles.title}>Homemade</span>
        </Link>
        <Link href='portfolio/websites' className={styles.item}>
          <span className={styles.title}>Snacks</span>
        </Link>
        <Link href='portfolio/apps' className={styles.item}>
          <span className={styles.title}>Vegan</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio