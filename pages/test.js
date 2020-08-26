import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hello from '../components/Hello'
import Op from '../components/Op'
import Card from '../components/Card'

const Test =() => (
    <div className={styles.container}>
      <Head>
        <title>This is TEST</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

         <h1>OVO JE TEST</h1>
		 <Hello />
     <Op />

<div style={{ display: 'flex', flexWrap: 'wrap' }} >
     <Card 
     Image="https://unsplash.it/300"
     Name="This is Card component"
     Text="Hello to props crazy component and let's see what it's look like"
     />
      <Card 
     Image="https://unsplash.it/290"
     Name="This is Card component 2"
     Text="Hello to props crazy component and let's see what it's look like"
     />
      <Card 
     Image="https://unsplash.it/310"
     Name="This is Card component 3"
     Text="Hello to props crazy component and let's see what it's look like"
     />
      <Card 
     Image="https://unsplash.it/320"
     Name="This is Card component 4"
     Text="Hello to props crazy component and let's see what it's look like"
     />
     </div>
    
    </div>
  )
export default Test
