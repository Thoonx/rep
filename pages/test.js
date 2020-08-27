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

   
         <h1>This is TEST</h1>

		 <Hello />
     <Op />

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
export default Test
