import '../styles/globals.css'
import Link from "next/link"

function MyApp({ Component, pageProps }) {
  return (
    <>
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
