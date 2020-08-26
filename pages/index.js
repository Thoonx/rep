import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>This is Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>This is HOME</h1>
      <p>Updated new 2</p>
        <img src='https://i.picsum.photos/id/538/200/200.jpg?hmac=oJRLJPsN8ZdWjPpKGEU-oqAZMBKa4JsTnuUSqgRbyP4'/>
    
        <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '1200px' }} >
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
}
