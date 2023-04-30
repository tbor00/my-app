import { Text, Card, Button } from '../../ui'

interface PostRecommendProps {
  postTitle: string
  publishedDate: Date
  readingTime: number
}

const PostRecommend = ({
  postTitle,
  publishedDate,
  readingTime
}: PostRecommendProps) => {
  return (
    <Card className="cursor-pointer mt-8 mb-8 rounded-2xl">
      <div className="mb-4">
        <div className="border-b border-dashed mb-4 border-gray-400 pb-4">
          <Button
            variant="buttonLink"
            className="border-blue-400 border flex items-center gap-2"
          >
            <span>Check the post</span>
            <span role="img">🥳</span>
          </Button>
        </div>
        <div className="divide-dashed border-white w-2"></div>
        <Text className="text-lg" bold="bold">
          {postTitle}
        </Text>
      </div>
      <div className="flex items-center gap-2">
        <Text variant="small" className="block text-slate-500 text-xs">
          Published: {publishedDate.toLocaleDateString('en-US')}
        </Text>
        <Text variant="small" className="text-slate-500 text-xs">
          Reading time: {readingTime} min
        </Text>
      </div>
    </Card>
  )
}

export const PostRecommends = () => {
  return (
    <section id="recommends" className="my-32 px-4">
      <Text variant="h3" className="text-2xl text-purple-200" bold="bold">
        My Blog
      </Text>
      <Text variant="p" className="text-slate-500 my-1 text-md">
        My latest posts
      </Text>
      <PostRecommend
        postTitle="React vs Nextjs, what is the beast Framework today?"
        publishedDate={new Date()}
        readingTime={10}
      />
      <PostRecommend
        postTitle="Migrate to zustand right now!"
        publishedDate={new Date()}
        readingTime={45}
      />
      <Button className="outline-blue-400 mt-2" variant="outline">
        <span> Read more</span>
      </Button>
    </section>
  )
}
