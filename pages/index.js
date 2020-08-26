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
       
    
        <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '1200px' }} >
     <Card 
     Image="https://unsplash.it/300"
     Name="This is Card component"
     Text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
     />
      <Card 
     Image="https://unsplash.it/290"
     Name="This is Card component 2"
     Text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
     />
      <Card 
     Image="https://unsplash.it/310"
     Name="This is Card component 3"
     Text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
     />
      <Card 
     Image="https://unsplash.it/320"
     Name="This is Card component 4"
     Text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
     />
     </div>
    </div>
  )
}
