import { nav } from '@/utils/navbar'
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import DarkMode from '../darkModeToggle/DarkMode'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>xander.dev</Link>
            <div className={styles.links}>
            <DarkMode/>
            {
                nav.map((link) =>
                    <Link key={link.id} href={link.path} className={styles.link}>{link.title}</Link>
                )
            }
            <button className={styles.logoutBtn}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar