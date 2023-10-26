"use client"

import { nav } from '@/utils/navbar'
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import DarkMode from '../darkModeToggle/DarkMode'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

const Navbar = () => {

    const session = useSession()

    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}><Image src="/logo2.png" height="40" width="100" alt=""/></Link>
            <div className={styles.links}>
                <DarkMode />
                {
                    nav.map((link) =>
                        <Link key={link.id} href={link.path} className={styles.link}>{link.title}</Link>
                    )
                }
                {
                    session.status === "authenticated" &&
                    <button className={styles.logoutBtn} onClick={signOut}>Logout</button>
                }
            </div>
        </div>
    )
}

export default Navbar