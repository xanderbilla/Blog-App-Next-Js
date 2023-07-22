"use client"

import React from 'react'
import styles from './page.module.css'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export const metadata = {
  title: 'Dashboard | Xander Billa',
  description: 'This page is to manage this application. ',
}

const Dashboard = () => {
  const session = useSession()
  const router = useRouter()

  //we can use useEffect hook in order to fetch data but we will not becuause it's not recommended to do that by NextJs team. It's always recommeded to use SWR for Client Side Rendering only.
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate()
      e.target.reset()
    } catch (error) {
      console.log(error);
    }
  }

const handleDelete = async (id) => {
try {
  await fetch(`/api/posts/${id}`, {
    method: "DELETE",
  })
  mutate()
} catch (error) {
  console.log(error);
}
}

  //OAuth 

  if (session.status === 'loading') {
    return <p>Please Wait...</p>
  }

  if (session.status === 'unauthenticated') {
    return router?.push('/dashboard/login')
  }

  if (session.status === 'authenticated') {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {
            isLoading ? "Loading... Please Wait..."
              : data?.map((item) => 
                <div className={styles.post} key={item._id}>
                  <div className={styles.imgContainer}>
                    <Image src={item.img} alt={item.title} height={100} width={200}/>
                  </div>
                  <h2 className={styles.title}>{item.title}</h2>
                  <span className={styles.delete} onClick={() => handleDelete(item._id)}>X</span>
                </div>
              )
          }
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" name="title" placeholder="Title" className={styles.input} />
          <input type="text" name="desc" placeholder="Description" className={styles.input} />
          <input type="text" name="img" placeholder="Image" className={styles.input} />
          <textarea name="content" placeholder="Content" className={styles.textarea} />
          <button className={styles.btn}>Submit</button>
        </form> 
      </div>
    )
  }
}

export default Dashboard