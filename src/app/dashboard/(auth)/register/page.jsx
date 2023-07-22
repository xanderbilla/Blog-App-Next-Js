"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import styles from './page.module.css'
import { useRouter } from "next/navigation";

export const metadata = {
    title: 'Register | Xander Billa',
    description: 'This is register page for this application. ',
  }

const Register = () => {

    const router = useRouter()
    const [err, setErr] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });
            res.status === 201 && router.push("/dashboard/login?success=Account has been created");
        } catch (err) {
            setError(err);
            console.log(err);
        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" required name="Username" placeholder="Username" className={styles.input} />
                <input type="email" required name="Email" placeholder="Email" className={styles.input} />
                <input type="password" required name="Password" placeholder="Password" className={styles.input} />
                <button type="submit" className={styles.btn}>Register</button>
                {err && 'Something Went Wrong!'}
            </form>
            <Link href='/dashboard/login'>Login with existing account</Link>
        </div>
    )
}

export default Register