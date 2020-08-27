import '../styles/globals.css'
import Head from 'next/head'
import Nav from '../components/Nav'
import { motion } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta property="custom" content="test" />
      </Head>
<Nav />
    
      <motion.div key={router.route} initial="pageInitial" animate="pageAntimation" 
      variants={{
        pageInitial: {
          opacity: 0
        },
        pageAntimation: {
          opacity: 1
        }
      }}> 
        <Component {...pageProps} />
      </motion.div>
</>
  )
}

export default MyApp
