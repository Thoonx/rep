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
     Image="https://i.picsum.photos/id/183/300/300.jpg?hmac=c0ri3TkrNW4SlQDd1jIvuhEo6rshnt3_yTWyeGwML2U"
     Name="This is Card component"
     Text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
     />
      <Card 
     Image="https://i.picsum.photos/id/833/290/290.jpg?hmac=ek_brHCnb8KBWYMNeqYN91MhPex5QbzFfmBDkvmu28Y"
     Name="This is Card component 2"
     Text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
     />
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
}
