import Head from 'next/head'
import Script from 'next/script'
import '../styles/globals.css'

function PurotoApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Puroto</title>
      </Head>
      <Script strategy='worker' src="https://cdn.jsdelivr.net/gh/hundredrabbits/Themes/scripts/lib/theme.js" />
      <Component {...pageProps} />
    </>
  )
}

export default PurotoApp
