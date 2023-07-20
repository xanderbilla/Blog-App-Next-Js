"use client"

import React from 'react'
import styles from './page.module.css'
import useSWR from 'swr'
const Dashboard = () => {

  //we can use useEffect hook in order to fetch data but we will not becuause it's not recommended to do that by NextJs team. It's always recommeded to use SWR for Client Side Rendering only.

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  console.log(data);

  return (
    <div className={styles.container}>Dashboard</div>
  )
}

export default Dashboard