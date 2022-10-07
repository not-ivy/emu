import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <meta name="description" content="A future social network for furries." />
      <meta property="og:description" content="A future social network for furries." />
      <meta name="theme-color" content="#6f50da" />
      <meta property="og:image" content="/favicon.ico" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Puroto" />
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script strategy='beforeInteractive' src="https://cdn.jsdelivr.net/gh/hundredrabbits/Themes/scripts/lib/theme.js" />
      </body>
    </Html>
  )
}