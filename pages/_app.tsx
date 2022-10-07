import Head from 'next/head'
import { useEffect } from 'react'
import { useTheme } from '../hooks/theme'
import '../styles/globals.css'

function PurotoApp({ Component, pageProps }) {
  useEffect(() => {
    const theme = new (window as any).Theme();
    useTheme.setState({ theme })
    theme.install(document.body);
    theme.start();
  }, [])

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
