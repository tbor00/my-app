import React from 'react'
import { useRouter } from 'next/router'
import { Button, Tooltip, Text } from '@/components/ui'

export const Navbar = () => {
    const uuid = React.useId()
    const router = useRouter()

    type navLinksType = {
        name: string
        description: string
        href: string
    }

    const navLinks: navLinksType[] = [
        {
            name: 'Home',
            description: 'Go to the main page',
            href: '/'
        },
        {
            name: 'About me',
            description: 'A little about me to get to know each other better',
            href: '/me'
        },
        {
            name: 'Projects',
            description: 'Projects in which I participate',
            href: '/projects'
        },
        {
            name: 'Contributions',
            description: 'My contributions to the community',
            href: '/contributions'
        }
    ]

    return (
        <nav style={{ backgroundColor: 'rgb(39, 38, 44)' }} className="shadow-md h-14 flex items-center justify-center">
            <div className="hidden md:flex items-center justify-center gap-6">
                {navLinks.map((link, index) => (
                    <React.Fragment key={`link-${index}-${uuid}`}>
                        <Tooltip isOnHover tooltipMessage={link.description}>
                            <Button
                                variant="buttonLink"
                                className={link.href === router.pathname ? 'text-purple-300 font-bold' : ''}
                                onClick={() => router.push(link.href)}
                            >
                                <span>{link.name}</span>
                            </Button>
                        </Tooltip>
                    </React.Fragment>
                ))}
            </div>
        </nav>
    )
}

export const Footer = () => {
    return (
        <footer className="flex items-center justify-center my-4">
            <Text variant="small" className="flex gap-2">
                <span> Made with 💜 and</span>
                <a href="https://nextjs.org/" target="__blank" className="underline text-purple-300">
                    Nextjs
                </a>
            </Text>
        </footer>
    )
}

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
