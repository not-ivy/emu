import Head from 'next/head'
import '../styles/globals.css'

function PurotoApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Puroto</title>
    </Head>
    <Component {...pageProps} />
    </>
  )
}

export default PurotoApp
