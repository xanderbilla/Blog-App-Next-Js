import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Blogs | Xander Billa',
  description: 'This page is is showcase of all the blogs by the author of this application. ',
}

const getData = async () => {
  const res = await fetch('https://test.xanderbilla.com/api/posts', {
      cache: 'no-store'
    }
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Blog = async () => {
  const data = await getData()
  return (
    <div className={styles.container}>
      {
        data.map((item) =>
          <Link href={`blog/${item._id}`} className={styles.item} key={item._id}>
            <div className={styles.imgContainer}>
              <Image
                src={item.img}
                alt=''
                width={400}
                height={250}
                className={styles.img}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </Link>
        )
      }
    </div>
  )
}

export default Blog