import Image from 'next/image';
import React from 'react'
import styles from './page.module.css'
import {notFound} from 'next/navigation'

const getData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store'
  })
  if (!res.ok) {
    return notFound()
  }

  return res.json()
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id)
  console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            {data.body}
          </p>
          <div className={styles.author}>
            <Image
              src="/avatar.png"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Admin</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/6796883/pexels-photo-6796883.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="image"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta praesentium corrupti sapiente nulla animi, voluptates quia minima error fuga placeat, quis omnis? Perferendis, doloribus explicabo. Asperiores rerum expedita ea voluptatum quasi excepturi laborum labore quas est a sequi quo, eos placeat accusantium iste praesentium sed! Soluta aperiam temporibus, magni veniam aliquid, quos quae assumenda provident delectus saepe impedit sint dolorum sunt blanditiis ab eum nostrum quo quibusdam, suscipit incidunt tempore. Doloribus ab obcaecati ipsam qui facilis et nostrum. Eos, inventore ullam repellat autem unde earum? Expedita eaque, recusandae maiores omnis quos repellat labore distinctio saepe natus, tempore dolorem ut quia.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam accusamus illum ipsam quo sunt! Asperiores eveniet excepturi cumque assumenda laudantium ex dicta non at? Eos corporis iure odio, corrupti nemo tenetur laboriosam expedita quo, excepturi sapiente voluptate veniam nostrum facere? Odit saepe laboriosam cumque deserunt id ad nobis rerum, culpa laudantium fugit ipsa veritatis doloribus sint eos repellat expedita provident, assumenda quos mollitia. Ullam facilis, perferendis modi, distinctio placeat maxime possimus, mollitia dolorem ducimus illum omnis labore velit voluptatem veritatis? Sit sequi assumenda aliquid voluptatem, magnam ratione architecto. Rem sequi aliquam porro impedit odio error ab maiores sit tempora ut?
        </p>
      </div>
    </div>
  )
};

export default BlogPost;