import '../styles/globals.css'
import Head from 'next/head'
import Nav from '../components/Nav'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta property="custom" content="test" />
      </Head>

      <Nav />
      <AnimatePresence exitBeforeEnter> 
  <Component {...pageProps} />
  </AnimatePresence>
</>
  )
}

export default MyApp
