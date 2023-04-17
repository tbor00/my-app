import Head from 'next/head'
import { Container, PostRecommends, Introduction, FindMe } from 'components'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Home page</title>
                <meta name="description" content="My personal website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Container className="flex items-center my-32 h-26 justify-center">
                    <div>
                        <Introduction />
                        <PostRecommends />
                        <FindMe />
                    </div>
                </Container>
            </div>
        </div>
    )
}
