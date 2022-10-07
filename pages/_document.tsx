import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script strategy='beforeInteractive' src="https://cdn.jsdelivr.net/gh/hundredrabbits/Themes/scripts/lib/theme.js" />
      </body>
    </Html>
  )
}