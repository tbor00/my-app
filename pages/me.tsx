import type { NextPage } from 'next'
import Head from 'next/head'

const Me: NextPage = () => {
    return (
        <div>
            <Head>
                <title>About me</title>
                <meta name="description" content="My personal website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            About me
        </div>
    )
}

export default Me
