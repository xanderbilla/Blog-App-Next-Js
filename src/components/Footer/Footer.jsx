import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.desc}>
        Copyright | Xander Billa. All Rights Reserved
      </div>
      <div className={styles.social}>
          <Image className={styles.icon} src="/1.png" alt='' width={15} height={15}/>
        <div className={styles.img}>
          <Image className={styles.icon} src="/2.png" alt='' fill={true} />
        </div>
        <div className={styles.img}>
          <Image className={styles.icon} src="/3.png" alt='' fill={true} />
        </div>
        <div className={styles.img}>
          <Image className={styles.icon} src="/4.png" alt='' fill={true} />
        </div>
      </div>
    </div>
  )
}

export default Footer