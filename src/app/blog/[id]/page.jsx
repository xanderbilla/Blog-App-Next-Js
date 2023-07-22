import Image from 'next/image';
import React from 'react'
import styles from './page.module.css'
import { notFound } from 'next/navigation'

const getData = async (id) => {
  const res = await fetch(`https://test.xanderbilla.com/api/posts/${id}`, {
    cache: 'no-store'
  })
  if (!res.ok) {
    return notFound()
  }

  return res.json()
}

export const generateMetadata = async ({ params }) => {

  const post = await getData(params.id)

  return {
    title: post.title,
    description: post.desc
  }
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            {data.desc}
          </p>
          <div className={styles.author}>
            <Image
              src="/avatar.png"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Admin</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.img}
            alt="image"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          {data.content}
        </p>
      </div>
    </div>
  )
};

export default BlogPost;