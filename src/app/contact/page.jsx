import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'

export const metadata = {
  title: 'Contact | Xander Billa',
  description: 'This page is all about how to contact the author of this application. ',
}

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Keep In Touch</h1>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image src='/contact.png' alt='contact' fill={true} className={styles.img}/>
        </div>
        <form action="" className={styles.form}>
          <input type="text" name="name" placeholder="name" className={styles.input} />
          <input type="text" name="email" placeholder="email" className={styles.input} />
          <textarea name="message" placeholder="message" cols="30" rows="10" className={styles.textarea}></textarea>
          <Button text="Send" url="#"/>
        </form>
      </div>
    </div>
  )
}

export default Contact