import 'normalize.css'
import '@styles/globals.scss'
import '@styles/animations.scss'

import Head from 'next/head'


import Layout from '@components/Layout'


function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="author" content="moz@mozky.dev" key="author" />
        <title>Ferbo & Kappa</title>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default Application
