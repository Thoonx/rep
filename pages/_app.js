import '../styles/globals.css'
import Link from "next/link"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <> 
      <Head>
        <meta property="custom" content="test" />
      </Head>

      <header>
        <Link href="/"><a>Home</a></Link>
        <Link href="/test"><a>Test</a></Link>
        <Link href="/About"><a>About</a></Link>
      </header>
      
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
