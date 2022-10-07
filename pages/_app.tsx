import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'
import '../styles/globals.css'

function PurotoApp({ Component, pageProps }) {
  useEffect(() => {
    const theme = new (window as any).Theme();
    theme.install(document.body);
    theme.start();
  })
  return (
    <>
      <Head>
        <title>Puroto</title>
      </Head>
      <Script strategy='beforeInteractive' src="https://cdn.jsdelivr.net/gh/hundredrabbits/Themes/scripts/lib/theme.js" />
      <Component {...pageProps} />
    </>
  )
}

export default PurotoApp
