import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import selfie from '/public/images/selfie.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.title}>
          Colin Gardiner
        </h1>
        <h2>
          Software Engineer
        </h2>

        <p className={styles.description}>
          Experience in developing web applications with JavaScript, NodeJS and React
        </p>
        <div>
        <Image 
          src={selfie}
          alt="profile picture"
          width={480}
          height={480}
          layout="intrinsic"
        />
        </div>
      </div>
    </div>
  )
}
