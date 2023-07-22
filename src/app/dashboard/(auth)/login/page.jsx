"use client"

import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './page.module.css'
import { useRouter } from "next/navigation";

export const metadata = {
  title: 'Login | Xander Billa',
  description: 'This login page for this application. ',
}

const Login = () => {

  const router = useRouter()
  const session = useSession()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;
    
    signIn("credentials", {email, password})
  };

  if(session.status === 'loading'){
    return <p>Please Wait...</p>  
  }
  
  if(session.status === 'authenticated'){
    router?.push('/dashboard') 
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="email" required name="Email" placeholder="Email" className={styles.input} />
        <input type="password" required name="Password" placeholder="Password" className={styles.input} />
        <button type="submit" className={styles.btn}>Login</button>
      </form>
      <Link href='/dashboard/register'>Create a new account</Link>
      <button className={styles.oAuthBtn} onClick={() => signIn("google")}>
        Sign In with Google
      </button>
    </div>
  )
}

export default Login