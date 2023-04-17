import Head from 'next/head'
import { Container } from 'components/ui'
import { AboutMe, WorkExperience } from 'components/modules/me'

export default function Me() {
    return (
        <div>
            <Head>
                <title>About me</title>
                <meta name="description" content="My personal website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container className="my-20">
                <AboutMe />
                <WorkExperience />
            </Container>
        </div>
    )
}
