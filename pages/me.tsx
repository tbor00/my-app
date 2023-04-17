import Head from 'next/head'
import { AboutMe } from 'components/modules/me'

export default function Me() {
    return (
        <div>
            <Head>
                <title>About me</title>
                <meta name="description" content="My personal website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section>
                <AboutMe />
            </section>
        </div>
    )
}
