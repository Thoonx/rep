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
     Image="https://i.picsum.photos/id/412/310/310.jpg?hmac=iN1jIc9awOz-A952ymHUFXRt7Av964jJXFzoepNQltk"
     Name="This is Card component 3"
     Text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
     />
      <Card 
     Image="https://i.picsum.photos/id/780/320/320.jpg?hmac=oG0y_Z4wFkhmoCaLMeEn8UNLBOf9l2-kf5AbFLPAxas"
     Name="This is Card component 4"
     Text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
     />
     </div>
    
    </div>
  )
export default Test
