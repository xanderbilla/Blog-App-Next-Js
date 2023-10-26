import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better ingredients make tasty food.</h1>
        <p className={styles.desc}>
          Turning your ideas into reality. we bring together the ingredients from the kitchen.
        </p>
        <Button text={"See Our Work"} url={'portfolio'}/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='home-img' className={styles.img} />
      </div>
    </div>
  )
}
