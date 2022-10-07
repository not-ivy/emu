import Head from 'next/head';
import BlankSlate from '../components/Blankslate';

export default function Error404() {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <BlankSlate title='404' body='That page could not be found.' />
    </>
  )
}