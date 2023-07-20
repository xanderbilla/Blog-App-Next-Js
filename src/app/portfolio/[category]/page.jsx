import Button from '@/components/Button/Button'
import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import { items } from './data'
import { notFound } from 'next/navigation'

const getData = (cat) => {
const data = items[cat]

if (data) {
  return data
}

return notFound()

}

const Category = ({ params }) => {
  const cat = params.category
  const data = getData(cat)
  return (
    <div className={styles.container}>
      <h1 className={styles.category}>{cat}</h1>
      {
        data.map((item) => 
        <div className={styles.item} key={item.id}>
        <div className={styles.content}>
          <h1 className={styles.contentTitle}>{item.title}</h1>
          <p className={styles.desc}>{item.desc}</p>
                    <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image src={item.image} alt="img" fill={true} className={styles.img} />
        </div>
      </div>
        )
      }
    </div>
  )
}

export default Category