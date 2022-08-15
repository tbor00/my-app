import type { NextPage } from 'next'
import Head from 'next/head'
import HomeContainer from '@/components/views/home/HomeContainer'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Home page</title>
                <meta name="description" content="My personal website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HomeContainer />
        </div>
    )
}

export default Home
