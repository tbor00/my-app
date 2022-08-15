import { Container } from '@/components/ui'
import { PostRecommends } from './PostRecommends'
import { Introduction } from './Introduction'
import { FindMe } from './FindMe'

const HomeContainer = () => {
    return (
        <div>
            <Container className="flex items-center my-32 h-26 justify-center">
                <div>
                    <Introduction />
                    <PostRecommends />
                    <FindMe />
                </div>
            </Container>
        </div>
    )
}

export default HomeContainer
