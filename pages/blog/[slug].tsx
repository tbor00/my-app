import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Article() {
    const router = useRouter()
    const { slug } = router.query

    return (
        <div>
            <Head>
                <title>Article</title>
                <meta name="description" content="My personal website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {slug}
        </div>
    )
}
