import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


const NotFound = () => (
    <div className={styles.container}>
      <Head>
        <title>TEST</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>404 - page not found</h1>
      <Link href="/"><a>Go Home</a></Link>
		 
    <style jsx>{`
      h1{
        color: red
      }
    `}
    </style>
    </div>
    
 
)

export default NotFound;
