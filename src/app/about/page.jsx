import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

export const metadata = {
  title: 'About | Xander Billa',
  description: 'This page is all about the Food and Kitchen. ',
}

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill={true} className={styles.img}></Image>
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Food StoryTeller</h1>
          <p className={styles.imgDesc}>Handcrafitng tasty food experience.</p>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.tite}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ut, sed vitae tenetur reprehenderit dolorem modi. Dolores similique accusantium rem minus sit illum voluptates nam? Assumenda fugit corporis harum a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur itaque odit, laudantium quidem, expedita nemo reiciendis id, facere sit blanditiis consectetur. At corporis facere qui autem aliquid placeat sed ex!
            <br />
            <br />
            Dolores iure facilis eligendi nam sit esse quam, quod blanditiis, omnis temporibus expedita error aliquid aspernatur, minima repudiandae natus voluptates! Repellendus facere natus rem incidunt odio quae laborum culpa beatae.
          </p>
        </div>
        <div className={styles.item}>
        <h1 className={styles.tite}>Who are we?</h1>
<p className={styles.desc}>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, perferendis esse? Nisi voluptatem iusto ea quo accusamus repudiandae illum perferendis quibusdam ipsa aperiam vero excepturi tenetur labore, veniam aut et.
  <br />
  <br />- Dynamic Websites  
  <br />
  <br />- Fast and Handy Mobile Responsive
  <br />
  <br />- Mobile Apps
</p>
<Button url={"contact"} text={"Contact"}/>
        </div>
      </div>
    </div>
  )
}

export default About