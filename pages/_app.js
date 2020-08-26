import '../styles/globals.css'
import Head from 'next/head'
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }) {
  return (
    <> 
      <Head>
        <meta property="custom" content="test" />
      </Head>

      <Nav />

  <Component {...pageProps} />
  </>
  )
}

export default MyApp
