import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>This is Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>This is HOME</h1>
      <p>Updated</p>

     
    </div>
  )
}
