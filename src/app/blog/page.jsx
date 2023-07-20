import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
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
          <Link href={`blog/${item.id}`} className={styles.item} key={item.id}>
            <div className={styles.imgContainer}>
              <Image
                src="https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=''
                width={400}
                height={250}
                className={styles.img}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.body}</p>
            </div>
          </Link>
        )
      }
    </div>
  )
}

export default Blog