import { Text, Card } from '../../components'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaGitlab } from 'react-icons/fa'
import { BsStackOverflow } from 'react-icons/bs'

type SocialNetworkType = {
    name: string
    icon: React.ReactNode
    description: string
    href: string
}

const listOfSocialNetWorks: SocialNetworkType[] = [
    {
        name: 'Github',
        description: 'I use it for personal projects or to contribute to open source',
        icon: <AiFillGithub />,
        href: 'https://github.com/tbor00'
    },
    {
        name: 'Gitlab',
        description: 'I use it for my work, this is where I contribute most of the time.',
        icon: <FaGitlab />,
        href: 'https://gitlab.com/tbor00'
    },
    {
        name: 'Stack Overflow',
        description: 'Search for solutions and contribute to the community with my questions and answers.',
        icon: <BsStackOverflow />,
        href: 'https://stackoverflow.com/users/19727909/timoteo-borgobello'
    },
    {
        name: 'Linkedin',
        description: 'I use it to interact with other profiles, it is a very good social network for work.',
        icon: <AiFillLinkedin />,
        href: 'https://www.linkedin.com/in/timoteo-borgobello-3991531a6/'
    }
]

const CardSocialNetworks = ({ name, icon, description, href }: SocialNetworkType) => {
    return (
        <Card className="rounded-xl cursor-pointer mb-4 w-72" effectDirection="y" role="link" onClick={() => window.open(href, '__blank')}>
            <div className="flex items-center gap-4">
                <div>{icon}</div>
                <div>{name}</div>
            </div>
            <Text variant="small" className="text-xs text-slate-500 text-center">
                {description}
            </Text>
        </Card>
    )
}

const SocialNetWorks = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4">
                {listOfSocialNetWorks?.map((sNetwork, index) => (
                    <CardSocialNetworks {...sNetwork} key={index} />
                ))}
            </div>
        </div>
    )
}

export const FindMe = () => {
    return (
        <section id="fme" className="px-4">
            <div className="text-right">
                <Text variant="h3" className="text-2xl text-purple-200" bold="bold">
                    Where can you find me?
                </Text>
                <Text variant="p" className="text-slate-500 my-1 text-md">
                    These are my {'"social networks"'}
                </Text>
            </div>
            <div className="mt-8">
                <SocialNetWorks />
            </div>
        </section>
    )
}
