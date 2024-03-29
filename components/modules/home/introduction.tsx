import { useRouter } from 'next/router'
import { Text, Button } from '../../ui'

export const Introduction = () => {
  const router = useRouter()
  return (
    <section id="introduction" className="px-4">
      <Text
        variant="h1"
        className="text-3xl md:text-6xl text-center"
        bold="bold"
      >
        Hey! my name is Tbor
        <br />
        And i{"'"}m <span className="text-purple-300">Software Engineer.</span>
      </Text>
      <Text
        variant="h2"
        className="text-slate-500 text-center mt-2 text-md md:text-lg"
      >
        Open source enthusiast, specialized in web applications, focus on
        writing scalable, high-quality, and efficient code.
        <br className="hidden md:block" /> I will be working in both backend and
        frontend.
      </Text>
      <div className="flex items-center gap-12 justify-center mt-10">
        <Button variant="primary" onClick={() => router.push('/me')}>
          About me
        </Button>
        <Button variant="outline" onClick={() => router.push('/projects')}>
          Projects
        </Button>
      </div>
    </section>
  )
}
