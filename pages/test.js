import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hello from '../components/Hello'
import Op from '../components/Op'

const Test =() => (
    <div className={styles.container}>
      <Head>
        <title>TEST</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

         <h1>OVO JE TEST</h1>
		 <Hello />
     <Op />
    
    </div>
  )

export default Test
