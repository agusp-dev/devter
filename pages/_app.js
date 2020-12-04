import { Fragment } from 'react'
import Head from 'next/head'
import styles, { globalStyles } from './styles'


function MyApp({ Component, pageProps }) {

	return (
		<Fragment>
			<Head>
        <title>Devter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
			<Component {...pageProps}/>
			<style jsx global>{ globalStyles }</style>
			<style jsx>{ styles }</style>
		</Fragment>
	)
}

export default MyApp
